import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { itServiceOrtenaukreis } from '../content';
import { LeistungenArticlePage } from '../leistungen-article-page';

export default component$(() => {
  return <LeistungenArticlePage page={itServiceOrtenaukreis} />;
});

export const head: DocumentHead = {
  title: itServiceOrtenaukreis.title,
  meta: [
    {
      name: 'description',
      content: itServiceOrtenaukreis.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für IT-Service im Ortenaukreis'
        },
        heading: itServiceOrtenaukreis.headerHeading,
        headingAccent: itServiceOrtenaukreis.headerAccent
      }
    }
  }
};
