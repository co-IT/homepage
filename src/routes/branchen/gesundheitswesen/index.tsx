import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { gesundheitswesen } from './content';

export default component$(() => {
  return <ArticlePage page={gesundheitswesen} />;
});

export const head = createArticlePageHead(gesundheitswesen);
