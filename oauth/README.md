# Decap CMS GitHub OAuth provider (Cloud Run)

A tiny dependency-free service that lets the `/admin` CMS log in with GitHub. Deployed to
Cloud Run **from source** so Cloud Build handles the image (avoids external-registry limits).

## Prereqisite: a GitHub **OAuth App** (not a GitHub App!)
GitHub → Settings → Developer settings → **OAuth Apps** → **New OAuth App**
- Homepage URL: `https://gen-lang-client-0892795260.web.app`
- Authorization callback URL: `https://example.com/callback` (temporary; fix after deploy)
- Register → copy **Client ID**, generate **Client secret**.

## Deploy (run from this `oauth/` folder)
```powershell
gcloud run deploy decap-oauth `
  --source . `
  --region=asia-southeast1 --allow-unauthenticated `
  --set-env-vars=OAUTH_CLIENT_ID=<CLIENT_ID>,OAUTH_CLIENT_SECRET=<CLIENT_SECRET> `
  --project=gen-lang-client-0892795260
```
First run will ask to enable Cloud Build + Artifact Registry APIs — say yes. Copy the
printed **Service URL**.

## Wire it up
1. In the GitHub OAuth App, set the callback URL to `<Service URL>/callback`.
2. Put `<Service URL>` in `public/admin/config.yml` → `base_url`.
3. Redeploy the site: `npm run build && firebase deploy --only hosting`.
4. Visit `/admin` → **Login with GitHub**.
