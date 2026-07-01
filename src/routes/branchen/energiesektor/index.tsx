import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { energiesektor } from './content';

export default component$(() => {
  return <ArticlePage page={energiesektor} />;
});

export const head = createArticlePageHead(energiesektor);
