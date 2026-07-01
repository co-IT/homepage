import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { technologienPartner } from './content';

export default component$(() => {
  return <ArticlePage page={technologienPartner} />;
});

export const head = createArticlePageHead(technologienPartner);
