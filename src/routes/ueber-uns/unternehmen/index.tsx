import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { unternehmen } from './content';

export default component$(() => {
  return <ArticlePage page={unternehmen} />;
});

export const head = createArticlePageHead(unternehmen);
