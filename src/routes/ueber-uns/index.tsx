import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { ueberUnsOverview } from './content';

export default component$(() => {
  return <ArticlePage page={ueberUnsOverview} />;
});

export const head = createArticlePageHead(ueberUnsOverview);
