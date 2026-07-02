---
name: co-it-site-content-import
description: Import structured co-IT website content from a Markdown navigation/content document into this Qwik homepage. Use when Codex is asked to read a Markdown file containing main navigation sections, overview pages, detail pages, routes, headings, article texts, and CTAs, then create or update ArticlePage routes, content.ts files, top navigation dropdowns, footer/content-switch links, generated article images with alt texts, and matching navigation icons.
---

# co-IT Site Content Import

## Purpose

Use this skill to repeat the website-content migration workflow for the co-IT homepage: a Markdown document is the source of truth, and the result is a set of Qwik routes, `PageContent` objects, ArticlePage overview/detail pages, generated article images, and a matching top navigation.

Before editing, read:

- `AGENTS.md`
- `.agents/memory.md`
- `references/content-import-workflow.md`

If the import creates new page/article topics or the existing image mapping would use placeholders, duplicated images, or weakly matching generic meeting imagery, also load and apply `$imagegen`.

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
   - Do not leave imported content on `/img/common/placeholder.svg` unless image generation is impossible and this is explicitly reported as a blocker.
   - Add every new topic used by `createImage(topic)` or `createBackgroundImage(topic)` to `src/components/article-page/article-page-images.ts` with a concrete WebP asset and a specific German alt text.
   - Each used topic key must resolve to an image asset; no imported topic should fall back to the default placeholder text.

4. Generate and wire article images.

   - For every new overview/detail page and every article topic, choose a distinct visual concept before generating assets.
   - Prefer existing assets only when they clearly match the exact topic and are not already used by another imported topic.
   - Generate missing assets with `$imagegen` as photorealistic, professional stock-style website images.
   - Save final project assets under `public/img/article-pages` as optimized `.webp` files with descriptive kebab-case names.
   - Keep the image style aligned with the co-IT site: slightly desaturated colors, subtle cool/blue cast, realistic lighting, no strong saturated colors, no logos, no readable private data, no watermarks.
   - Use a varied mix of people, objects, environments, camera angles, activities, and emotions. Avoid making every image a meeting, workshop, or "consultant plus laptop" scene.
   - Industry pages must show concrete everyday work in that industry. Examples: Großhandel should show logistics, warehouse, scanners, pallets, packing or conveyor workflows; Energiesektor should show people with helmets near high-voltage infrastructure, substations, control rooms, radios or grid operations; Gesundheitswesen should show doctors, practice/clinic workflows, secure workstations or medical IT; Handwerk should show craftspeople actively building or servicing, for example on a roof, scaffold, workshop, or job site; Behörden should feel like a classic older public office with desks, binders, forms, counters, scanners and administrative work; Lohnfertiger should show production halls, CNC machines, inspected parts, machine terminals or quality-control work.
   - Product and solution pages must show the described solution in use: awareness learning/evidence, phishing decision or analytics, password manager rollout with phone/security key, security checks with DNS/email/report review, KI website builder with sitemap/wireframes/content structure.
   - Write concise German alt texts that describe the visible scene, not generic "Bild zu ...".
   - No generated image should be used twice for imported topics.

5. Create routes.

   - For each main section route, create `src/routes/<slug>/content.ts` and `index.tsx`.
   - For each detail route, create `src/routes/<main>/<detail>/content.ts` and `index.tsx`.
   - Detail `content.ts` files stay local in their route folder.
   - Import `ArticlePage` and `createArticlePageHead` from `~/components/article-page`.

6. Update navigation.

   - Replace/adjust top-level items in `src/_shell/menu/menu.config.tsx` to match imported main sections.
   - Main nav items with children must have `path`, `ad`, and a category whose `text` equals the main nav label.
   - Dropdown subitems link to detail routes and use specific icons.
   - Create one icon per file under `src/_shell/top-bar/icons`; match the existing 58x58, filled `#02024D` style. Draw original simple SVGs; do not copy external icon libraries.

7. Update related navigation surfaces.

   - Footer link list should be driven by main navigation only, while preserving existing footer contact/address/social/legal content.
   - Update `ContentSwitch` if it still points to old primary sections.
   - Mobile menu should show the accordion header, then `Übersicht`, then direct subitems; do not repeat the category heading.

8. Preserve UX fixes from this migration.

   - Desktop dropdown remains fixed, hoverable from top nav into panel, and closes on pointer leave.
   - Dropdown layout prioritizes menu items; the nav ad can move below on narrower desktop widths.
   - Prevent menu text from overflowing its fields.

9. Verify.
   - Prefer `pnpm build.types` and `pnpm lint`.
   - If pnpm is blocked by the local approval/install policy, run direct equivalents:
     - `.\node_modules\.bin\tsc.ps1 --noEmit --incremental false`
     - `.\node_modules\.bin\eslint.CMD "src/**/*.ts*"`
   - Run a duplicate/fallback image scan over all imported `content.ts` topic keys. The expected result for imported content is zero duplicated image files and zero fallback placeholder mappings.
   - Do not run Prettier if the user says they will run it.
   - Start a dev server only if the user wants visual verification by Codex.

## Output Summary

When finished, report:

- Imported main sections and route count.
- Navigation files changed.
- New/reused images and icons, including where generated WebP assets were saved.
- Image duplicate/fallback scan result.
- Verification commands and warnings.
- Anything intentionally not deleted, especially old unrelated routes.
