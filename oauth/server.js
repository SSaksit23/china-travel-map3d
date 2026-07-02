// Minimal GitHub OAuth provider for Decap CMS (dependency-free Node).
// Endpoints:
//   /auth     → redirects the admin to GitHub's authorize page (scope: repo)
//   /callback → exchanges the code for a token, hands it back to the CMS window
// Deployed to Cloud Run from source (see oauth/README.md). Config via env:
//   OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET  (from a GitHub OAuth App)
const http = require("node:http");
const https = require("node:https");
const crypto = require("node:crypto");

const PORT = process.env.PORT || 8080;
const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

/** HTML that posts the result back to the Decap CMS window and closes. */
function resultPage(status, payload) {
  const msg = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><body>
<script>
(function () {
  var message = ${JSON.stringify(msg)};
  function receive(e) {
    window.opener && window.opener.postMessage(message, e.origin);
    window.removeEventListener("message", receive, false);
    setTimeout(function () { window.close(); }, 300);
  }
  window.addEventListener("message", receive, false);
  window.opener && window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>Login complete — you can close this window.</p>
</body></html>`;
}

function exchangeCode(code) {
  const body = JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code });
  return new Promise((resolve, reject) => {
    const req = https.request(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": Buffer.byteLength(body),
          "User-Agent": "decap-oauth",
        },
      },
      (r) => {
        let data = "";
        r.on("data", (c) => (data += c));
        r.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const redirectUri = `https://${req.headers.host}/callback`;

    if (url.pathname === "/auth") {
      const gh = new URL("https://github.com/login/oauth/authorize");
      gh.searchParams.set("client_id", CLIENT_ID);
      gh.searchParams.set("redirect_uri", redirectUri);
      gh.searchParams.set("scope", "repo,user");
      gh.searchParams.set("state", crypto.randomBytes(12).toString("hex"));
      res.writeHead(302, { Location: gh.toString() });
      res.end();
      return;
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      console.log("[callback] hit, code present:", !!code);
      if (!code) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end(resultPage("error", { error: "missing_code" }));
        return;
      }
      try {
        const token = await exchangeCode(code);
        console.log("[callback] exchange → access_token:", !!token.access_token, "error:", token.error || "none");
        if (!token.access_token) throw new Error(token.error_description || token.error || "no token");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(resultPage("success", { token: token.access_token, provider: "github" }));
      } catch (err) {
        console.log("[callback] FAILED:", String(err.message || err));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(resultPage("error", { error: String(err.message || err) }));
      }
      return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Decap CMS GitHub OAuth provider. Use /auth.");
  })
  .listen(PORT, () => console.log(`oauth provider on :${PORT}`));
