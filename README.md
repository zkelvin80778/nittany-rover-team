# Nittany Rover Team website

Astro static website for a team in establishment at Penn State University Park. Project Sunrise and the intended 2027–28 URC season are described as ambitions, not completed capabilities or confirmed entry.

## Local preview

Use Node 22.12+ and pnpm 11.19.0:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Astro. `pnpm build` produces the static site in `dist/`; `pnpm preview` serves that production build.

## Edit the site

- `src/data/site.ts`: full team name, target season, application URL, contact email, rules year, URLs, source references and verification date.
- `src/data/content.ts`: project ambitions, contribution areas, mission summaries and development sequence.
- `src/pages/`: page-specific editorial content; `src/layouts/` and `src/components/` hold the shared presentation.
- `src/styles/global.css`: shared colors, typography and responsive layout.

The original generated banner is `public/images/mars-sunrise.webp`. Its prompt and provenance are recorded in `docs/SOURCES.md`. The historical photograph is separately licensed; see its attribution there and on the URC page.

Applications and support inquiries are closed by default. Do not enter dummy emails or dummy form URLs. To open applications, verify the actual Microsoft form, populate `applicationUrl` and `contactEmail`, then set `applicationsOpen: true`. The open application CTA requires all three values. No application data is stored by the site.

## GitHub Pages

Copy this directory’s contents (including `.github/`, excluding `node_modules/`, `.astro/`, and `dist/`) to the root of the selected GitHub repository. Commit `pnpm-lock.yaml`.

1. Select **GitHub Actions** as the repository’s Pages source.
2. Applications can remain closed for the initial launch. Before opening them, configure verified application and contact details following `docs/APPLICATION.md`.
3. Review the content and deployment checks in `docs/LAUNCH.md`.
4. Push to `main`, or run the deployment workflow manually.

The workflow obtains the actual origin and repository base path from GitHub Pages. It builds with those values, uploads `dist/`, and deploys using the standard Pages actions. It stops publishing if applications are enabled without a form URL and contact email. Local builds and previews do not require launch configuration.

To verify repository-path hosting locally:

```sh
SITE_URL=https://example.github.io BASE_PATH=/nittany-rover-team pnpm build
```

In PowerShell, set those two environment variables before running `pnpm build`. Never commit the example origin as the deployed site address. For a custom domain, configure it in GitHub Pages and recheck canonical URLs, sitemap, HTTPS and asset paths. No domain has been purchased or configured.

## Hosting

Repository: https://github.com/zkelvin80778/nittany-rover-team

Site: https://zkelvin80778.github.io/nittany-rover-team/

Pushes to main automatically build and deploy. Applications remain closed, and the social links are placeholders until club profiles are available.

