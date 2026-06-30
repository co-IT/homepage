import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { cyberSicherheit } from '../content';
import { LeistungenArticlePage } from '../leistungen-article-page';

export default component$(() => {
  return <LeistungenArticlePage page={cyberSicherheit} />;
});

export const head: DocumentHead = {
  title: cyberSicherheit.title,
  meta: [
    {
      name: 'description',
      content: cyberSicherheit.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für Cyber-Sicherheit'
        },
        heading: cyberSicherheit.headerHeading,
        headingAccent: cyberSicherheit.headerAccent
      }
    }
  }
};
