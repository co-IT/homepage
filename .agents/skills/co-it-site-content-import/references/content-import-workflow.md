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
          description: 'Schnell. Persönlich. Vor Ort.',
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

- Prefer an existing image only when it clearly matches the page/article topic and is not already used by another imported topic.
- Otherwise generate a new image with `$imagegen`.
- Do not leave newly imported content on `/img/common/placeholder.svg` unless image generation is impossible; report that explicitly.
- Use `createImage(topic, src?)` and `createBackgroundImage(topic, source?)`.
- Add all new image mappings to `src/components/article-page/article-page-images.ts` using `createArticleImageAsset(fileName, alt)`.
- Save generated assets under `public/img/article-pages` as optimized `.webp` files.
- Only create an image-path constant when the same path is used more than once in the same file.
- Do not map two imported topics to the same image file. Generate or choose another asset instead.
- German alt texts should describe the visible scene and activity, not just repeat the topic.

### Generated Image Style

Use this direction for generated article/page images:

- Photorealistic, highly realistic editorial/stock photography, suitable for a professional B2B website.
- Slightly desaturated color grading with a subtle cool/blue cast that fits the co-IT design system.
- Realistic natural or workplace lighting; no dramatic cyber clichés, neon hacker imagery, watermarks, logos, or readable sensitive data.
- People should often be present, but not every scene should show people talking in a meeting.
- Vary environments, objects in hand, camera distance, posture, activity, and emotion.
- Include single-person work scenes, hands-on service scenes, operational environments, documents, devices, tools, scanners, tablets, phones, security keys, machines, or dashboards as appropriate.

### Industry Image Alignment

For industry content, show everyday work inside the industry context:

- Großhandel: logistics, warehouse aisles, pallets, packing stations, scanners, conveyor belts, barcode printers, shipment workflows.
- Energiesektor: people with helmets near high-voltage lines, substations, utility sites, control rooms, radios, grid operation screens.
- Gesundheitswesen: doctors, medical assistants, clinic or practice rooms, nurses' stations, secure workstations, medical IT support, privacy-conscious workflows.
- Handwerk: craftspeople actively working on a roof, scaffold, workshop, job site, tools, routers/printers or digital job planning in a hands-on environment.
- Behörden: classic older public office, desks, binders, stamps, paper forms, counters, scanners, modest administrative atmosphere.
- Lohnfertiger: production halls, CNC machines, metal/plastic parts, inspection tables, machine terminals, quality control, rugged tablets.
- Versicherungen: claims folders, document scanning, secure records, privacy screens, careful document workflows.
- Dienstleister: service operations, cloud/process dashboards, client communication, project work, but avoid repeating a generic meeting scene.

### Product And Solution Image Alignment

For product and solution content, show the solution being used:

- Cyber-Awareness-Portal: learning progress, certificates, evidence, completion dashboards, reminders, course review.
- Phishing-Simulationen: a person deciding how to handle a suspicious email, reporting workflow, simulation analytics, improvement plan.
- Passwort-Manager: rollout/onboarding, smartphone 2FA, security key, vault setup, practical employee support without visible passwords.
- Sicherheitschecks: DNS/email/web security checks, reports, risk matrix, technical workstation, prioritized recommendations.
- Webseiten-Builder mit KI: sitemap cards, wireframes, content structure, page drafts, human review of AI-supported website structure.
- Microsoft 365/Azure: migration planning, admin sessions, cloud architecture, secure collaboration setup.
- Managed Services: monitoring, server/network maintenance, operations dashboard, proactive maintenance.
- Web-/Softwareentwicklung: prototype tests, app walkthroughs, architecture review, user feedback.
- Digital-/KI-Strategie: concrete AI use-case exploration, documents/scanners, roadmap/compliance review.

### Image Generation Checklist

Before finishing an import:

1. List every `createImage(topic)` and `createBackgroundImage(topic)` topic used by the imported routes.
2. Ensure each topic has a mapping in `src/components/article-page/article-page-images.ts`.
3. Ensure no imported topic falls back to `/img/common/placeholder.svg`.
4. Ensure no generated/imported topic reuses the same image file as another imported topic.
5. Ensure filenames are descriptive kebab-case `.webp` files under `public/img/article-pages`.
6. Ensure alt texts are specific German descriptions of the visible scene.
7. Run or adapt this duplicate/fallback scan:

```powershell
@'
const fs=require('fs'); const path=require('path');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name); return e.isDirectory()?walk(p):[p];});}
const files=walk('src/routes').filter(f=>f.endsWith('content.ts'));
const topics=[];
for(const f of files){const s=fs.readFileSync(f,'utf8'); const re=/create(?:Background)?Image\(\s*(['"`])([^'"`]+)\1/g; let m; while((m=re.exec(s))) topics.push(m[2]);}
const img=fs.readFileSync('src/components/article-page/article-page-images.ts','utf8');
const blocks=[...img.matchAll(/(?:^|\n)\s*(['"]?)([^'"\n:]+)\1:\s*createArticleImageAsset\(\s*\r?\n?\s*'([^']+)'/g)].map(m=>({topic:m[2].trim(),src:m[3]}));
const map=Object.fromEntries(blocks.map(b=>[b.topic,b.src]));
const used=[...new Set(topics)].map(t=>({topic:t,src:map[t]||'(fallback)'}));
const by={}; for(const u of used){(by[u.src]??=[]).push(u.topic)}
const dup=Object.entries(by).filter(([s,a])=>a.length>1);
const fallback=used.filter(u=>u.src==='(fallback)');
console.log('topics', used.length, 'dups', dup.length, 'fallback', fallback.length);
for(const [src,arr] of dup) console.log(src, '=>', arr.length, arr.join(' | '));
if(fallback.length) console.log('fallback', fallback.map(f=>f.topic).join(' | '));
'@ | node -
```

## Cleanup Rules

- Do not delete old routes unless the user explicitly asks.
- It is fine to remove old top-level nav entries from `menu.config.tsx` when the Markdown is replacing the navigation.
- Keep existing footer address, map, social, legal, and attribution content.
- Keep generated content local to route folders; keep reusable UI/helper code in components.
