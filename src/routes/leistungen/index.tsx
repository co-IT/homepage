import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { LeistungenArticlePage } from './leistungen-article-page';
import { leistungenOverview } from './content';

export default component$(() => {
  return <LeistungenArticlePage page={leistungenOverview} />;
});

export const head: DocumentHead = {
  title: leistungenOverview.title,
  meta: [
    {
      name: 'description',
      content: leistungenOverview.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für IT-Leistungen'
        },
        heading: leistungenOverview.headerHeading,
        headingAccent: leistungenOverview.headerAccent
      }
    }
  }
};
