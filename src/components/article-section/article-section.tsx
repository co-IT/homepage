import { component$ } from '@builder.io/qwik';
import { ArticleCard } from './article-card';
import type { Article } from './model/article';

export interface ArticleSectionProps {
  articles: Article[];
}

export const ArticleSection = component$((props: ArticleSectionProps) => {
  return (
    <div class='container mx-auto flex w-full flex-col'>
      {props.articles.map((article, key) => (
        <div key={key}>
          <ArticleCard article={article} />
          {key < props.articles.length - 1 && <hr class='my-10 lg:my-20' />}
        </div>
      ))}
    </div>
  );
});
