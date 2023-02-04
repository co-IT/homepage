import { component$ } from '@builder.io/qwik';
import { ArticleCard } from './article-card';
import type { Article } from './model/article';

export interface ArticleSectionProps {
  articles: Article[];
}

export const ArticleSection = component$((props: ArticleSectionProps) => {
  return (
    <div class='w-full container mx-auto flex flex-col gap-y-10 lg:gap-y-20'>
      {props.articles.map((article, key) => (
        <>
          <ArticleCard article={article} key={key} />
          <hr class='mt-10 lg:mt-20' />
        </>
      ))}
    </div>
  );
});
