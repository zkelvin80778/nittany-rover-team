# Validation — September 24, 2026

- Astro production build passed for root hosting and `/nittany-rover-team/` repository-path hosting. Seven HTML pages including 404, plus sitemap and robots, were generated.
- Static audit of repository-path output checked 90 internal links/assets and all seven page headings, plus sitemap origin/base path and the closed application/contact states. No errors.
- Browser inspection: all six routes loaded at 390 px width with one H1 each and no horizontal document overflow. Homepage also checked at 320 px. Desktop homepage, Project Sunrise and URC layouts inspected visually.
- Mobile menu opened, navigated to Join Us, and closed with Escape. Keyboard focus reached the skip link with a visible outline.
- All six pages checked with root text temporarily enlarged to 32 px (200%); no horizontal document overflow at desktop width. Enlarged mobile homepage inspected. Test-only font override removed afterward. The in-app browser did not implement keyboard zoom, so this verifies text enlargement rather than browser zoom behavior.
- 2027 rules download returned HTTP 200 anonymously (1,760,617 bytes). Rules and Q&A pages responded. PDF year is identified by official embedded filename; mission summary is based on the official news announcement.
- Publication guard correctly refused launch with missing form/contact settings. This is expected; it does not prevent local builds.
- No Microsoft Forms account, form URL, reviewer list, GitHub destination or contact email was supplied. Live form submission/access checks and public deployment/HTTPS checks remain unperformed.
- Non-blocking dependency warnings: Rollup strips misplaced pure annotations in Zod during build. Output is generated successfully.

Primary palette contrast ratios on basalt: ivory 15.13:1, muted text 9.02:1, orange 7.94:1. Exact command checks logged during implementation; final interactive and editorial text uses these high-contrast pairs. Banner copy uses a dark overlay for legibility.


## September 25 redesign
Rebuilt the presentation around full-height sections, uppercase system typography, outlined buttons, compact navigation, and a minimal footer. Removed the numbered homepage grid, orange panels, external font requests, and slogan-heavy headings. All seven pages compile. All six main routes checked at 390 px with no horizontal overflow and one H1. Desktop homepage and Project Sunrise inspected visually. Prior design contrast figures above refer to the September 24 version; the current interface uses white and light gray on black.
