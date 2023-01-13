import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleTriad } from '../components/article-triad/article-triad';
import { Heading } from '../components/heading/heading';
import { LinkCallToAction } from '../components/link-call-to-action/link-call-to-action';

export default component$(() => {
  return (
    <ArticleTriad>
      <section q:slot="article">
        <Heading>
          <span q:slot="primary">Denken Sie auch in</span>
          <span q:slot="accent">ganzheitlichen Lösungen?</span>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          repellat eveniet atque incidunt, praesentium quia sequi quidem dolorem
          amet quos eos ex voluptatibus blanditiis magni reprehenderit corporis
          maxime inventore laboriosam.
        </p>
        <LinkCallToAction href="/">Mehr erfahren</LinkCallToAction>
      </section>
      <img q:slot="image" src="/img/landing-page/developers-tablet.jpg"></img>
    </ArticleTriad>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
