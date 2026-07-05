# renobelk-portfolio

Jason Belk's AI-engineering portfolio. Static site built with Astro 5, deployed on Cloudflare Pages. Live target: **renobelk.com**.

Positioning: applied-AI builder (Forward-Deployed / Solutions / Applied-AI Engineer). Two pillars: tool-for-the-job polyglot, and operator who ships and runs real products.

## Local development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built dist/
```

Node 22+.

## Structure

- `src/pages/index.astro` — hero + project grid (`ProjectGrid.astro`, screenshot tiles).
- `src/pages/work/[...slug].astro` — one showcase page per `work` entry, via `ShowcaseLayout.astro`.
- `src/pages/about.astro` — bio, how-I-build, skills matrix.
- `src/content/work/*.mdx` — one file per project (schema in `src/content.config.ts`). Set `draft: true` to hide from the site.
- `src/components/` — `ProjectGrid`, `ByTheNumbers` (operator stats band), `SkillStories` (the click-to-expand judgment stories), `SiteHeader`/`SiteFooter`.
- `public/images/` — screenshots (`heroImage` drives the grid tile + showcase hero; `gallery` renders a grid on the showcase page). Compress new screenshots before committing (`sips -Z 1600 file.png && pngquant --ext .png file.png`).
- `public/favicon.svg` — jb monogram.

Content style rules (enforced): no em-dashes, digits not spelled out, contractions, no four-part parallels, no motivational closers.

## Deploy runbook (Cloudflare Pages via GitHub)

**Current state:** this repo is LOCAL ONLY. It has never been pushed to GitHub, which is why Cloudflare Pages does not list it (only `nvidia-portfolio` shows up). Deploy is a one-time wiring:

1. **Create the GitHub repo and push.** Decide the repo name first (see "Open decisions"). Then:
   ```bash
   gh repo create <name> --private --source=. --remote=origin --push
   # or create it in the GitHub UI and: git remote add origin <url> && git push -u origin main
   ```
2. **Cloudflare Pages → Create project → Connect to Git → pick the new repo.**
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - (No env vars needed. No build-time secrets.)
   - Every push to `main` redeploys automatically (same as `nvidia-portfolio`).
3. **Custom domain:** in the Pages project → Custom domains → add `renobelk.com`. If `renobelk.com` DNS is already on Cloudflare, it wires the CNAME automatically; otherwise point DNS at the Pages URL.
4. **Redirect the second domain:** once live, change the GoDaddy `jasonbelk.com` forward (currently 301 → LinkedIn) to `https://renobelk.com`.

## Open decisions (before pushing to GitHub)

- **Repo name** — `renobelk-portfolio` (matches the domain, recommended) vs a rename (`renobelk`, `portfolio`). Renaming is cheap NOW (before Cloudflare is wired), fiddly after. Renaming later means: rename on GitHub, update the local `origin` remote, and reconnect the Cloudflare Pages project.
- **Public vs private** — private is the safe default (the deployed site is what's public; the repo has no secrets). Public is also fine and would double as a clean-code sample (spec-driven commit history, no secrets), if that helps the applied-AI-builder story.
