import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { webseitenBuilderKi } from './content';

export default component$(() => {
  return <ArticlePage page={webseitenBuilderKi} />;
});

export const head = createArticlePageHead(webseitenBuilderKi);
