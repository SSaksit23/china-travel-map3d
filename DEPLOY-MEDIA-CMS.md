# Media CMS + Firebase Hosting — one-time setup

A graphical media manager (Decap CMS) lets you add images/video per location without
touching files. Uploads commit to GitHub; GitHub Actions rebuilds and publishes to
**Firebase Hosting** (free tier ≈ $0/mo). The app reads the committed `media.json`.

Everything in the repo is already wired. Do these **external, one-time** steps (they need
Google/GitHub sign-in, so they can't be automated). Replace each `REPLACE_WITH_…` token.

## 1. Firebase project (hosting)
Project ID **`gen-lang-client-0892795260`** is already filled into `.firebaserc` and
`.github/workflows/deploy.yml`. This is your existing Google Cloud project (it was created
by Google AI Studio / Gemini), so you just need to add Firebase Hosting to it:
1. Go to https://console.firebase.google.com → **Add project** → **choose the existing GCP
   project** `gen-lang-client-0892795260` (don't create a new one) → accept.
2. In the Firebase console left nav → **Build → Hosting → Get started** (enables Hosting).
3. Locally (once): `npm i -g firebase-tools` → `firebase login` → test a manual deploy:
   `npm run build && firebase deploy --only hosting`. (No `firebase init` needed — config is
   committed.) This confirms hosting works before wiring CI.

## 2. Let GitHub Actions deploy (service account secret)
1. Firebase Console → Project settings → **Service accounts** → *Generate new private key*
   (downloads a JSON).
2. GitHub repo → Settings → Secrets and variables → **Actions** → New secret:
   name `FIREBASE_SERVICE_ACCOUNT`, value = the full JSON contents.
3. Push to `main` → the **Build & Deploy** workflow runs and publishes.

## 3. GitHub OAuth for the CMS (so /admin can log in)
Decap's GitHub backend needs a tiny OAuth proxy (holds the client secret).
1. GitHub → Settings → Developer settings → **OAuth Apps** → New:
   - Homepage URL: your Firebase site URL.
   - Authorization callback URL: `https://<oauth-proxy-url>/callback` (from step 4).
   - Note the **Client ID** and **Client Secret**.
2. Deploy the proxy to **Cloud Run** (scales to zero, ~$0). Easiest image:
   `ghcr.io/ublabs/netlify-cms-github-oauth` (or `vencax/netlify-cms-github-oauth-provider`).
   Set env: `OAUTH_CLIENT_ID`, `OAUTH_CLIENT_SECRET`, `ORIGIN`/`REDIRECT_URL` per that image's
   README. Get the service URL.
3. Put that URL in `public/admin/config.yml` → `base_url: https://<oauth-proxy-url>`.
4. Redeploy (push to main).

## 4. Who can log in
Anyone with **write access to the GitHub repo** can use `/admin`. Add staff as repo
collaborators (Settings → Collaborators). No separate user system needed.

## Using it
- Visit `https://<your-site>/admin` → **Login with GitHub**.
- Open a location under **Location media**, drag in photos (first = hero), optionally paste a
  **Video URL** (YouTube or an mp4 link) and set orientation. **Publish**.
- Decap commits image files to `public/attractions/` and the record to `content/media/<id>.json`.
- GitHub Actions rebuilds (regenerating `media.json`) and deploys — live in ~1 minute.

## Notes
- `media.json` is a **build artifact** — `npm run build` regenerates it from `content/media/`
  + `public/attractions/`. Don't hand-edit it.
- You can still add media the manual way (drop files in `public/attractions/`,
  `npm run scaffold:media`); `npm run audit:media` shows coverage.
- All tokens to replace: Firebase project id (`.firebaserc`, `deploy.yml`), OAuth proxy URL
  (`public/admin/config.yml`), and the `FIREBASE_SERVICE_ACCOUNT` GitHub secret.
