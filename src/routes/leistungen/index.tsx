import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { leistungenOverview } from './content';

export default component$(() => {
  return <ArticlePage page={leistungenOverview} />;
});

export const head = createArticlePageHead(leistungenOverview);
