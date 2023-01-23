import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ],
  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/solutions/header.avif',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Alles aus einer Hand',
        headingAccent: 'Vollumfänglich statt punktuell'
      }
    }
  }
};
