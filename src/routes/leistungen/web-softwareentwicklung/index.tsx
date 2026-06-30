import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { LeistungenArticlePage } from '../leistungen-article-page';
import { webSoftwareentwicklung } from '../content';

export default component$(() => {
  return <LeistungenArticlePage page={webSoftwareentwicklung} />;
});

export const head: DocumentHead = {
  title: webSoftwareentwicklung.title,
  meta: [
    {
      name: 'description',
      content: webSoftwareentwicklung.metaDescription
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/leistungen/placeholder.svg',
          alt: 'Platzhalterbild für Web- und Softwareentwicklung'
        },
        heading: webSoftwareentwicklung.headerHeading,
        headingAccent: webSoftwareentwicklung.headerAccent
      }
    }
  }
};
