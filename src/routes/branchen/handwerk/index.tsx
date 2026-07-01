import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { handwerk } from './content';

export default component$(() => {
  return <ArticlePage page={handwerk} />;
});

export const head = createArticlePageHead(handwerk);
