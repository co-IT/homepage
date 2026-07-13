# homepage

> The official homepage of [co-IT.eu GmbH](https://co-IT.eu)

## Prerequisites

- Please install
  - the latest [Node LTS](https://nodejs.org) version
  - the package manager [pnpm](https://pnpm.io/installation#using-npm)

## Get ready to contribute

- Clone/Fork this repository
- Install packages running `pnpm install`
- Start the dev-server `pnpm start`
  - The browser will start automatically
- Congratulations, you are ready to code 👩‍💻

## Static Site Generator (Node.js)

```bash
pnpm build.server
```

## Build environment

The static build uses environment variables to generate canonical URLs, the sitemap and robots directives.

- `ORIGIN` defines the public origin of the deployment, for example `https://co-IT.eu` or `https://beta.co-IT.eu`. It is used for absolute sitemap URLs and canonical output. CI builds require this variable.
- `PUBLIC_SEO_EXCLUDED_ROUTES` defines routes that should still be built, but excluded from SEO indexing. Matching routes are removed from `dist/sitemap.xml`, receive a `noindex,nofollow` robots meta tag and are written as `Disallow` entries to `dist/robots.txt`.

`PUBLIC_SEO_EXCLUDED_ROUTES` can be comma-separated or line-separated. Use `/*` to exclude the whole deployment, for example on beta environments.

Examples:

```bash
ORIGIN='https://co-IT.eu' PUBLIC_SEO_EXCLUDED_ROUTES='/kontrakte/,/cyber/*,/produkte/passwort-manager/' pnpm build --prod
```

```bash
ORIGIN='https://beta.co-IT.eu' PUBLIC_SEO_EXCLUDED_ROUTES='/*' pnpm build --prod
```

## Skills

Skills are installed using [skills.sh](https://www.skills.sh/)

### co-IT Site Content Import

Use the local skill `$co-it-site-content-import` when a Markdown document should
be imported into the homepage navigation and article-page route structure.

Example prompt:

```text
Use $co-it-site-content-import with C:\Users\TimSchneider\Downloads\co-IT_Website-Texte_Navigationsstruktur_final_optimiert.md and import all main navigation sections.
```

The skill guides Codex through:

- parsing routes, headings, article texts and CTAs from the Markdown file
- creating overview and detail routes with `ArticlePage`/`PageContent`
- updating the top navigation dropdowns, footer links and content switch
- choosing placeholder or existing images
- creating matching navigation icons in the existing icon style
- running type and lint checks without formatting
