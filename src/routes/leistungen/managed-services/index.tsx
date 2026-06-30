import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { managedServices } from './content';

export default component$(() => {
  return <ArticlePage page={managedServices} />;
});

export const head = createArticlePageHead(managedServices);
