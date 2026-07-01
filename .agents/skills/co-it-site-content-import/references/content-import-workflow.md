# co-IT Content Import Reference

## Markdown Shape

The source document usually looks like this:

```markdown
## /leistungen/

# LEISTUNGEN

## IT-Leistungen für Betrieb, Sicherheit, Software und Strategie

Intro text for the overview page.

### Schnell. Persönlich. Vor Ort.

Article teaser text.

**CTA:** Mehr erfahren (/leistungen/it-service-ortenaukreis/)

## /leistungen/it-service-ortenaukreis/

# IT-SERVICE ORTENAUKREIS

## IT-Service im Ortenaukreis für Unternehmen

### Schnell. Persönlich. Vor Ort.

Detail article text.
```

Parsing rules:

- `## /.../` starts a page.
- `# ...` is the hero/main heading.
- First `## ...` after that is the content heading.
- Text before the first `###` is overview intro/body text.
- Each `### ...` is one article heading.
- Paragraphs below an article heading become article text until the next `###`, next route, or CTA.
- CTA with a URL becomes `callToAction` on overview cards.
- CTA without a URL is informational only unless explicitly requested.

## Generated Route Pattern

Overview route:

```tsx
import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { sectionOverview } from './content';

export default component$(() => {
  return <ArticlePage page={sectionOverview} />;
});

export const head = createArticlePageHead(sectionOverview);
```

Detail route:

```tsx
import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { detailPage } from './content';

export default component$(() => {
  return <ArticlePage page={detailPage} />;
});

export const head = createArticlePageHead(detailPage);
```

Content object:

```ts
import type { PageContent } from '~/components/article-page';
import { createBackgroundImage, createImage } from '~/components/article-page';

export const detailPage: PageContent = {
  title: 'co-IT - Seitentitel',
  metaDescription: 'Kurze SEO-Beschreibung.',
  headerHeading: 'Seitentitel',
  headerSubheading: 'Kurzer Subhead',
  backgroundImage: createBackgroundImage('Thema'),
  contentHeading: 'Inhaltsüberschrift',
  contentText: 'Optionaler Übersichtstext.',
  articles: [
    {
      direction: 'right',
      heading: 'Artikelüberschrift',
      text: 'Artikeltext.',
      image: createImage('Thema'),
      callToAction: {
        text: 'Mehr erfahren',
        href: '/ziel/',
        ariaLabel: 'Mehr über Thema erfahren'
      }
    }
  ]
};
```

Alternate `direction` values between `right` and `left` on overview and detail article lists.

## Navigation Pattern

Each imported main section becomes a top-level nav item:

```tsx
{
  text: 'Leistungen',
  path: '/leistungen',
  ad: {
    headline: 'IT-Leistungen abstimmen',
    description: 'Kurzer Beratungstext.',
    image: (
      <img
        src='/img/common/placeholder.svg'
        alt='Passender Alt-Text'
        width='193'
        height='233'
        class='h-[14.5rem] w-48 object-cover'
      />
    ),
    link: '/contact',
    ctaText: 'Beratung anfragen'
  },
  items: [
    {
      text: 'Leistungen',
      isCategory: true,
      items: [
        {
          text: 'IT-Service Ortenaukreis',
          description: 'Schnell, persönlich, vor Ort',
          path: '/leistungen/it-service-ortenaukreis',
          icon: <OnSiteServiceIcon />
        }
      ]
    }
  ]
}
```

## Icons

Rules:

- Put each icon in its own file under `src/_shell/top-bar/icons`.
- Use Qwik `component$`.
- Use 58x58 SVG, `fill='none'`, filled paths with `#02024D`.
- Draw original simple shapes tailored to the menu item.
- Do not copy external SVG path data from icon libraries.

## Image Rules

- Prefer an existing image only when it clearly matches the page topic.
- Otherwise use `/img/common/placeholder.svg`.
- Use `createImage(topic, src?)` and `createBackgroundImage(topic, source?)`.
- Only create an image-path constant when the same path is used more than once in the same file.

## Cleanup Rules

- Do not delete old routes unless the user explicitly asks.
- It is fine to remove old top-level nav entries from `menu.config.tsx` when the Markdown is replacing the navigation.
- Keep existing footer address, map, social, legal, and attribution content.
- Keep generated content local to route folders; keep reusable UI/helper code in components.
