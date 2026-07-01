import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { versicherungen } from './content';

export default component$(() => {
  return <ArticlePage page={versicherungen} />;
});

export const head = createArticlePageHead(versicherungen);
