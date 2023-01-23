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
          source: '/img/about/header.avif',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Motiviert von Werten',
        headingAccent: 'Mut, Kollegialität, Hingabe'
      }
    }
  }
};
