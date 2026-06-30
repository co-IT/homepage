import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { managedServices } from '../content';
import { LeistungenArticlePage } from '../leistungen-article-page';

export default component$(() => {
  return <LeistungenArticlePage page={managedServices} />;
});

export const head: DocumentHead = {
  title: managedServices.title,
  meta: [
    {
      name: 'description',
      content: managedServices.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für Managed Services'
        },
        heading: managedServices.headerHeading,
        headingAccent: managedServices.headerAccent
      }
    }
  }
};
