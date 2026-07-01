import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { behoerden } from './content';

export default component$(() => {
  return <ArticlePage page={behoerden} />;
});

export const head = createArticlePageHead(behoerden);
