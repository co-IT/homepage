import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { branchenOverview } from './content';

export default component$(() => {
  return <ArticlePage page={branchenOverview} />;
});

export const head = createArticlePageHead(branchenOverview);
