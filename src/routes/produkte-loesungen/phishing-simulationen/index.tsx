import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { phishingSimulationen } from './content';

export default component$(() => {
  return <ArticlePage page={phishingSimulationen} />;
});

export const head = createArticlePageHead(phishingSimulationen);
