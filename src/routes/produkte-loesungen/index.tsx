import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { produkteLoesungenOverview } from './content';

export default component$(() => {
  return <ArticlePage page={produkteLoesungenOverview} />;
});

export const head = createArticlePageHead(produkteLoesungenOverview);
