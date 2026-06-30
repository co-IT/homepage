import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { microsoft365Azure } from './content';

export default component$(() => {
  return <ArticlePage page={microsoft365Azure} />;
});

export const head = createArticlePageHead(microsoft365Azure);
