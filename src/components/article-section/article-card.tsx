import { component$ } from '@builder.io/qwik';
import { HeadingArticle } from '../heading-article';
import type { Article } from './model';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = component$((props: ArticleCardProps) => {
  return (
    <>
      {props.article.direction == 'right' ? (
        <div class='lg:px-10 flex flex-col lg:flex-row gap-x-12'>
          <div class='w-full flex flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <HeadingArticle text={props.article.heading} />
              <div class='w-full mt-4 lg:hidden'>
                <img {...props.article.image} loading='lazy' />
              </div>
            </div>

            <p class='text-base text-black whitespace-pre-line font-normal leading-7 opacity-80 tracking-normal text-left px-10 lg:px-0'>
              {props.article.text}
            </p>
          </div>

          <div class='w-full hidden lg:block'>
            <img {...props.article.image} loading='lazy' />
          </div>
        </div>
      ) : (
        <div class='lg:px-10 flex flex-col lg:flex-row gap-x-12'>
          <div class='w-full hidden lg:block'>
            <img {...props.article.image} loading='lazy' />
          </div>

          <div class='w-full flex flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <div class='w-10 h-1 bg-accent mx-auto lg:mx-0' />
              <div class='text-3xl lg:text-4xl text-secondary-900 font-bold leading-8 lg:leading-10 text-center lg:text-left px-6 lg:px-0'>
                {props.article.heading}
              </div>
              <div class='w-full mt-4 lg:hidden'>
                <img {...props.article.image} loading='lazy' />
              </div>
            </div>

            <p class='text-base text-black whitespace-pre-line font-normal leading-7 opacity-80 tracking-normal text-left px-10 lg:px-0'>
              {props.article.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
});
