# Deploying this site to GitHub Pages (and how to do it yourself)

This doc explains what’s set up and how to repeat it on another project.

---

## What’s in this repo

1. **`vite.config.js`** – `base: process.env.BASE_PATH || '/'`  
   - Locally: `BASE_PATH` is unset → base is `'/'` → app works at `http://localhost:5173`.  
   - In CI: we set `BASE_PATH` to `'/REPO_NAME/'` so the built site works at `https://USERNAME.github.io/REPO_NAME/`.

2. **`.github/workflows/deploy.yml`** – GitHub Actions workflow that:
   - Runs on every push to `main`.
   - Builds the app with the right `BASE_PATH`.
   - Copies `index.html` to `404.html` so client-side routing works if you add routes later.
   - Uploads the `dist` folder and deploys it to GitHub Pages.

---

## Doing it yourself (from scratch)

### 1. One-time: repo and GitHub Pages

- Create a new repo on GitHub (e.g. `my-site`).
- Push your code and set **Settings → Pages → Source** to **GitHub Actions** (not “Deploy from a branch”).

### 2. Vite base path

In `vite.config.js`:

```js
export default defineConfig({
  // ...
  base: process.env.BASE_PATH || '/',
})
```

So:
- Local dev: no `BASE_PATH` → base `'/'` → `http://localhost:5173`.
- GitHub Pages (project site): set `BASE_PATH=/your-repo-name/` in the workflow.

### 3. Add the workflow

Create `.github/workflows/deploy.yml` (or any name ending in `.yml` in `.github/workflows/`).

**Trigger** – when to run:

```yaml
on:
  push:
    branches:
      - main
```

**Permissions** – needed for deploying to Pages:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

**Build job** – checkout, Node, install, build, upload artifact:

- `actions/checkout@v4` – get the repo.
- `actions/setup-node@v4` with `cache: "npm"` – Node and npm cache.
- `npm ci` – install deps from lockfile (reproducible).
- `npm run build` with `env: { BASE_PATH: '/REPO_NAME/' }` – build for GitHub Pages.
- Optionally: `cp dist/index.html dist/404.html` for SPA routing.
- `actions/upload-pages-artifact@v3` with `path: ./dist` – hand the built site to the deploy job.

**Deploy job** – run after build, use the artifact:

- `needs: build` – wait for the build job.
- `actions/deploy-pages@4` – publish the uploaded artifact to GitHub Pages.

You can copy the full `deploy.yml` from this repo and only change the branch name or `BASE_PATH` if your repo name is different.

### 4. Repo name and URL

- **Project site**: `https://USERNAME.github.io/REPO_NAME/`  
  - So `BASE_PATH` must be `'/REPO_NAME/'` (e.g. `'/Main-Website/'`).
- **User/org site**: repo must be named `USERNAME.github.io`, and the site is at `https://USERNAME.github.io/`.  
  - Then use `base: '/'` and you don’t need `BASE_PATH` in the workflow.

### 5. After you push

- Go to the **Actions** tab; the workflow should run on every push to `main`.
- First time: ensure **Settings → Pages → Source** is **GitHub Actions**.
- When the workflow is green, open `https://USERNAME.github.io/REPO_NAME/` (or your user site URL).

---

## Useful concepts

- **Workflow**: one YAML file = one pipeline (e.g. “on push to main → build → deploy”).
- **Job**: a set of steps that run on the same runner; `needs: build` means “run after build”.
- **Artifact**: the built `dist` folder is uploaded by the build job and downloaded for the deploy job; you don’t commit `dist` to the repo.
- **Environment**: `github-pages` is a special environment for the deploy job; the **Pages** setting “GitHub Actions” is what uses it.

---

## Troubleshooting

- **404 on the site**: Check that `BASE_PATH` in the workflow matches your repo name (e.g. `/${{ github.event.repository.name }}/`).
- **Assets 404**: Usually wrong `base`; same as above.
- **Workflow doesn’t run**: Ensure the file is in `.github/workflows/` and the trigger branch (e.g. `main`) is the one you’re pushing to.
- **Pages still “branch”**: In **Settings → Pages**, switch **Source** to **GitHub Actions**, then push again so a new workflow run deploys.

Once this is set up, you only need to push to `main` to deploy; no manual `npm run deploy` or `gh-pages` branch.
