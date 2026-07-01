import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { arbeitsweise } from './content';

export default component$(() => {
  return <ArticlePage page={arbeitsweise} />;
});

export const head = createArticlePageHead(arbeitsweise);
