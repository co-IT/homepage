import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { grosshandel } from './content';

export default component$(() => {
  return <ArticlePage page={grosshandel} />;
});

export const head = createArticlePageHead(grosshandel);
