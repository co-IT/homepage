import { component$ } from '@builder.io/qwik';
import { ArticlePage, createArticlePageHead } from '~/components/article-page';
import { passwortManagerUnternehmen } from './content';

export default component$(() => {
  return <ArticlePage page={passwortManagerUnternehmen} />;
});

export const head = createArticlePageHead(passwortManagerUnternehmen);
