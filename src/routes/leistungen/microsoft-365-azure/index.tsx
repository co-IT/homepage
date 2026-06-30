import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { microsoft365Azure } from '../content';
import { LeistungenArticlePage } from '../leistungen-article-page';

export default component$(() => {
  return <LeistungenArticlePage page={microsoft365Azure} />;
});

export const head: DocumentHead = {
  title: microsoft365Azure.title,
  meta: [
    {
      name: 'description',
      content: microsoft365Azure.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für Microsoft 365 und Azure'
        },
        heading: microsoft365Azure.headerHeading,
        headingAccent: microsoft365Azure.headerAccent
      }
    }
  }
};
