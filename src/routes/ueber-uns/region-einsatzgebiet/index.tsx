import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { regionEinsatzgebiet } from './content';

export default component$(() => {
  return <ArticlePage page={regionEinsatzgebiet} />;
});

export const head = createArticlePageHead(regionEinsatzgebiet);
