/**
 * Publish photos uploaded in the attraction card to everyone, through the same
 * pipeline the /admin media CMS (Decap) uses:
 *   GitHub login via the Decap OAuth proxy  →  one commit on main adding the
 *   images to public/attractions/ and their paths to content/media/<id>.json  →
 *   the Build & Deploy workflow rebuilds media.json and publishes to Firebase.
 *
 * Repo, branch and proxy mirror public/admin/config.yml — keep them in sync.
 */
const REPO = "SSaksit23/china-travel-map3d";
const BRANCH = "main";
const OAUTH_BASE = "https://decap-oauth-191920990617.asia-southeast1.run.app";
const API = `https://api.github.com/repos/${REPO}`;

const TOKEN_KEY = "ctm.githubToken";
/** Decap keeps its session here; reuse it so /admin users don't log in twice. */
const DECAP_USER_KEYS = ["decap-cms-user", "netlify-cms-user"];

/** Longest edge of a published photo (keeps the repo + page weight small). */
const MAX_EDGE = 1600;

/** Same locations Decap writes to (media_folder / public_folder in config.yml). */
const MEDIA_FOLDER = "public/attractions";
const PUBLIC_FOLDER = "/attractions";

type MediaContent = {
  id: string;
  name: string;
  images?: string[];
  video?: string;
  orientation?: "horizontal" | "vertical";
};

export type PublishErrorCode = "auth" | "forbidden" | "notfound" | "conflict" | "network" | "other";

export class PublishError extends Error {
  constructor(message: string, readonly code: PublishErrorCode) {
    super(message);
  }
}

// ---------------------------------------------------------------- token

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function getToken(): string | null {
  const own = readStored(TOKEN_KEY);
  if (own) return own;
  for (const key of DECAP_USER_KEYS) {
    try {
      const user = JSON.parse(readStored(key) ?? "null");
      if (user?.token) return user.token as string;
    } catch {
      /* ignore malformed */
    }
  }
  return null;
}

function clearToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage blocked */
  }
}

/**
 * GitHub login popup, using the Decap/Netlify OAuth handshake the proxy speaks:
 * popup → "authorizing:github" → we echo it → "authorization:github:success:{token}".
 */
export function login(): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = `${OAUTH_BASE}/auth?provider=github&site_id=${encodeURIComponent(
      location.hostname
    )}&scope=repo`;
    const popup = window.open(url, "ctm-github-login", "width=600,height=720");
    if (!popup) {
      reject(new PublishError("Popup blocked", "auth"));
      return;
    }
    const origin = new URL(OAUTH_BASE).origin;
    const finish = (fn: () => void) => {
      window.removeEventListener("message", onMessage);
      clearInterval(closedPoll);
      fn();
    };
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== origin || typeof e.data !== "string") return;
      if (e.data === "authorizing:github") {
        (e.source as Window | null)?.postMessage(e.data, e.origin);
        return;
      }
      const m = e.data.match(/^authorization:github:(success|error):([\s\S]*)$/);
      if (!m) return;
      let payload: { token?: string; error?: string } = {};
      try {
        payload = JSON.parse(m[2]);
      } catch {
        /* keep empty */
      }
      const token = payload.token;
      if (m[1] === "success" && token) {
        try {
          localStorage.setItem(TOKEN_KEY, token);
        } catch {
          /* token lives for this call only */
        }
        finish(() => resolve(token));
      } else {
        finish(() => reject(new PublishError(payload.error ?? "Login failed", "auth")));
      }
    };
    window.addEventListener("message", onMessage);
    const closedPoll = setInterval(() => {
      if (popup.closed) finish(() => reject(new PublishError("Login cancelled", "auth")));
    }, 500);
  });
}

// ---------------------------------------------------------------- GitHub API

async function gh<T>(token: string, path: string, init: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API}${path}`, {
      ...init,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        ...(init.body ? { "Content-Type": "application/json" } : {}),
      },
    });
  } catch {
    throw new PublishError("Network error", "network");
  }
  if (res.ok) return (await res.json()) as T;
  if (res.status === 401) {
    clearToken();
    throw new PublishError("GitHub session expired", "auth");
  }
  if (res.status === 403) throw new PublishError("No write access", "forbidden");
  if (res.status === 404) throw new PublishError("Not found", "notfound");
  if (res.status === 409 || res.status === 422) throw new PublishError("Branch moved", "conflict");
  throw new PublishError(`GitHub ${res.status}`, "other");
}

/** Downscale to MAX_EDGE and re-encode as JPEG; returns base64 (no data: prefix). */
async function toJpegBase64(blob: Blob): Promise<string> {
  const bitmap = await createImageBitmap(blob);
  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const jpeg = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode failed"))), "image/jpeg", 0.85)
  );
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(jpeg);
  });
  return dataUrl.slice(dataUrl.indexOf(",") + 1);
}

const base64ToUtf8 = (b64: string) =>
  new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\n/g, "")), (c) => c.charCodeAt(0)));

/**
 * Commit the photos for one stop as a single commit on BRANCH.
 * Returns their public paths (e.g. "/attractions/<id>-<stamp>-1.jpg") in order.
 */
export async function publishPhotos(
  token: string,
  stop: { id: string; name: string },
  photos: Blob[]
): Promise<string[]> {
  // Fails fast (forbidden / not found) when this GitHub account can't see the repo.
  let ref: { object: { sha: string } };
  try {
    ref = await gh(token, `/git/ref/heads/${BRANCH}`);
  } catch (err) {
    if (err instanceof PublishError && err.code === "notfound") {
      throw new PublishError("No access to the repo", "forbidden");
    }
    throw err;
  }

  const encoded = await Promise.all(photos.map(toJpegBase64));
  const stamp = Date.now().toString(36);
  const files = encoded.map((content, i) => {
    const name = `${stop.id}-${stamp}-${i + 1}.jpg`;
    return { repoPath: `${MEDIA_FOLDER}/${name}`, publicPath: `${PUBLIC_FOLDER}/${name}`, content };
  });

  // Upload image blobs once; the commit below is retried if main moves meanwhile.
  const blobShas = await Promise.all(
    files.map((f) =>
      gh<{ sha: string }>(token, "/git/blobs", {
        method: "POST",
        body: JSON.stringify({ content: f.content, encoding: "base64" }),
      }).then((r) => r.sha)
    )
  );

  const contentPath = `content/media/${stop.id}.json`;
  for (let attempt = 0; ; attempt++) {
    try {
      if (attempt > 0) ref = await gh(token, `/git/ref/heads/${BRANCH}`);
      const head = ref.object.sha;
      const parent = await gh<{ tree: { sha: string } }>(token, `/git/commits/${head}`);

      let record: MediaContent = {
        id: stop.id,
        name: stop.name,
        images: [],
        video: "",
        orientation: "horizontal",
      };
      try {
        const existing = await gh<{ content: string }>(token, `/contents/${contentPath}?ref=${head}`);
        record = JSON.parse(base64ToUtf8(existing.content)) as MediaContent;
      } catch (err) {
        // Missing slot → create it (same shape scaffold:media seeds).
        if (!(err instanceof PublishError && err.code === "notfound")) throw err;
      }
      record.images = [...(record.images ?? []), ...files.map((f) => f.publicPath)];

      const tree = await gh<{ sha: string }>(token, "/git/trees", {
        method: "POST",
        body: JSON.stringify({
          base_tree: parent.tree.sha,
          tree: [
            ...files.map((f, i) => ({ path: f.repoPath, mode: "100644", type: "blob", sha: blobShas[i] })),
            { path: contentPath, mode: "100644", type: "blob", content: `${JSON.stringify(record, null, 2)}\n` },
          ],
        }),
      });
      const commit = await gh<{ sha: string }>(token, "/git/commits", {
        method: "POST",
        body: JSON.stringify({
          message: `media: add ${files.length} photo(s) to ${stop.id} (in-app upload)`,
          tree: tree.sha,
          parents: [head],
        }),
      });
      // Non-forced update: fails with 422 if main moved, and we rebuild on the new head.
      await gh(token, `/git/refs/heads/${BRANCH}`, {
        method: "PATCH",
        body: JSON.stringify({ sha: commit.sha, force: false }),
      });
      return files.map((f) => f.publicPath);
    } catch (err) {
      if (err instanceof PublishError && err.code === "conflict" && attempt < 2) continue;
      throw err;
    }
  }
}
