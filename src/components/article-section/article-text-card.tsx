import { component$ } from '@builder.io/qwik';
import { HeadingArticle } from '../heading-article';
import type { ArticleTextBlock } from './model';

interface ArticleTextCardProps {
  article: ArticleTextBlock;
}

export const ArticleTextCard = component$((props: ArticleTextCardProps) => {
  return (
    <div class='mx-auto max-w-4xl px-6 lg:px-10'>
      <div class='rounded border border-secondary-900/10 bg-secondary-900/5 px-6 py-8 shadow-[0_24px_60px_-32px_rgba(2,2,77,0.18)] lg:px-10'>
        <HeadingArticle text={props.article.heading} />
        <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80'>
          {props.article.text}
        </p>
      </div>
    </div>
  );
});
