import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { cyberAwarenessPortal } from './content';

export default component$(() => {
  return <ArticlePage page={cyberAwarenessPortal} />;
});

export const head = createArticlePageHead(cyberAwarenessPortal);
