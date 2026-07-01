import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { lohnfertiger } from './content';

export default component$(() => {
  return <ArticlePage page={lohnfertiger} />;
});

export const head = createArticlePageHead(lohnfertiger);
