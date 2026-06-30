import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { webSoftwareentwicklung } from './content';

export default component$(() => {
  return <ArticlePage page={webSoftwareentwicklung} />;
});

export const head = createArticlePageHead(webSoftwareentwicklung);
