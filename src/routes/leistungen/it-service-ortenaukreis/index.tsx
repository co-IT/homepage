import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { itServiceOrtenaukreis } from './content';

export default component$(() => {
  return <ArticlePage page={itServiceOrtenaukreis} />;
});

export const head = createArticlePageHead(itServiceOrtenaukreis);
