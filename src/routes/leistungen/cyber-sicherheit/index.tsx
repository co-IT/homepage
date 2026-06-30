import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { cyberSicherheit } from './content';

export default component$(() => {
  return <ArticlePage page={cyberSicherheit} />;
});

export const head = createArticlePageHead(cyberSicherheit);
