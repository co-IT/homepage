import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { dienstleister } from './content';

export default component$(() => {
  return <ArticlePage page={dienstleister} />;
});

export const head = createArticlePageHead(dienstleister);
