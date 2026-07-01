import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { sicherheitschecks } from './content';

export default component$(() => {
  return <ArticlePage page={sicherheitschecks} />;
});

export const head = createArticlePageHead(sicherheitschecks);
