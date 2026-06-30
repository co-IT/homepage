import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { digitalKiStrategie } from '../content';
import { LeistungenArticlePage } from '../leistungen-article-page';

export default component$(() => {
  return <LeistungenArticlePage page={digitalKiStrategie} />;
});

export const head: DocumentHead = {
  title: digitalKiStrategie.title,
  meta: [
    {
      name: 'description',
      content: digitalKiStrategie.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für Digital- und KI-Strategie'
        },
        heading: digitalKiStrategie.headerHeading,
        headingAccent: digitalKiStrategie.headerAccent
      }
    }
  }
};
