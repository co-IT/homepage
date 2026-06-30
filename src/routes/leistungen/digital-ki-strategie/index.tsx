import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { digitalKiStrategie } from './content';

export default component$(() => {
  return <ArticlePage page={digitalKiStrategie} />;
});

export const head = createArticlePageHead(digitalKiStrategie);
