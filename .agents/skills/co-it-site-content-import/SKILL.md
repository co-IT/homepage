---
name: co-it-site-content-import
description: Import structured co-IT website content from a Markdown navigation/content document into this Qwik homepage. Use when Codex is asked to read a Markdown file containing main navigation sections, overview pages, detail pages, routes, headings, article texts, and CTAs, then create or update ArticlePage routes, content.ts files, top navigation dropdowns, footer/content-switch links, placeholder/image usage, and matching navigation icons.
---

# co-IT Site Content Import

## Purpose

Use this skill to repeat the website-content migration workflow for the co-IT homepage: a Markdown document is the source of truth, and the result is a set of Qwik routes, `PageContent` objects, ArticlePage overview/detail pages, and a matching top navigation.

Before editing, read:

- `AGENTS.md`
- `.agents/memory.md`
- `references/content-import-workflow.md`

## Inputs

Require or infer:

- Path to the Markdown content/navigation document.
- The main sections to import. If the user does not restrict scope, import all main sections in the Markdown.
- Whether existing routes/content should be overwritten or merged. Default: overwrite generated content for matching imported routes, but do not delete unrelated old routes unless explicitly requested.

If the Markdown path is missing, ask for it.

## Workflow

1. Inspect current implementation.
   - Read `src/_shell/menu/menu.config.tsx`.
   - Read `src/components/article-page`, `src/components/article-section`, and one existing generated route.
   - Check `public/img/common/placeholder.svg`; create it only if missing.

2. Parse the Markdown.
   - Treat each `## /route/` block as one page.
   - In each page block, read the following `#` as `headerHeading`.
   - Read the following `##` as `contentHeading`.
   - Text between `contentHeading` and first `###` is `contentText` for overview pages.
   - Each `###` starts an article with heading and paragraph text.
   - `**CTA:** Label (/target/)` on overview pages becomes `callToAction`.
   - Detail-page CTAs without URLs are not rendered unless the user asks for bottom CTAs.

3. Build the page model.
   - Use `PageContent` from `~/components/article-page`.
   - Use `createImage` and `createBackgroundImage` from `~/components/article-page`.
   - Keep image path constants only when the same path is used more than once in that file; otherwise inline the path.
   - Use `/img/common/placeholder.svg` when no existing image clearly fits.

4. Create routes.
   - For each main section route, create `src/routes/<slug>/content.ts` and `index.tsx`.
   - For each detail route, create `src/routes/<main>/<detail>/content.ts` and `index.tsx`.
   - Detail `content.ts` files stay local in their route folder.
   - Import `ArticlePage` and `createArticlePageHead` from `~/components/article-page`.

5. Update navigation.
   - Replace/adjust top-level items in `src/_shell/menu/menu.config.tsx` to match imported main sections.
   - Main nav items with children must have `path`, `ad`, and a category whose `text` equals the main nav label.
   - Dropdown subitems link to detail routes and use specific icons.
   - Create one icon per file under `src/_shell/top-bar/icons`; match the existing 58x58, filled `#02024D` style. Draw original simple SVGs; do not copy external icon libraries.

6. Update related navigation surfaces.
   - Footer link list should be driven by main navigation only, while preserving existing footer contact/address/social/legal content.
   - Update `ContentSwitch` if it still points to old primary sections.
   - Mobile menu should show the accordion header, then `Übersicht`, then direct subitems; do not repeat the category heading.

7. Preserve UX fixes from this migration.
   - Desktop dropdown remains fixed, hoverable from top nav into panel, and closes on pointer leave.
   - Dropdown layout prioritizes menu items; the nav ad can move below on narrower desktop widths.
   - Prevent menu text from overflowing its fields.

8. Verify.
   - Prefer `pnpm build.types` and `pnpm lint`.
   - If pnpm is blocked by the local approval/install policy, run direct equivalents:
     - `.\node_modules\.bin\tsc.ps1 --noEmit --incremental false`
     - `.\node_modules\.bin\eslint.CMD "src/**/*.ts*"`
   - Do not run Prettier if the user says they will run it.
   - Start a dev server only if the user wants visual verification by Codex.

## Output Summary

When finished, report:

- Imported main sections and route count.
- Navigation files changed.
- New/reused images and icons.
- Verification commands and warnings.
- Anything intentionally not deleted, especially old unrelated routes.
