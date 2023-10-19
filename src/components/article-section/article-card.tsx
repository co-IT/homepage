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
        <div class='flex flex-col gap-x-12 lg:flex-row lg:px-10'>
          <div class='flex w-full flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <HeadingArticle text={props.article.heading} />
              <div class='mt-4 w-full lg:hidden'>
                <img
                  {...props.article.image}
                  width='1920'
                  height='1280'
                  loading='lazy'
                />
              </div>
            </div>

            <p class='whitespace-pre-line px-10 text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 lg:px-0'>
              {props.article.text}
            </p>
          </div>

          <div class='hidden w-full lg:block'>
            <img
              {...props.article.image}
              width='1920'
              height='1280'
              loading='lazy'
            />
          </div>
        </div>
      ) : (
        <div class='flex flex-col gap-x-12 lg:flex-row lg:px-10'>
          <div class='hidden w-full lg:block'>
            <img
              {...props.article.image}
              width='1920'
              height='1280'
              loading='lazy'
            />
          </div>

          <div class='flex w-full flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <div class='mx-auto h-1 w-10 bg-primary lg:mx-0' />
              <div class='px-6 text-center text-3xl font-bold leading-8 text-secondary-900 lg:px-0 lg:text-left lg:text-4xl lg:leading-10'>
                {props.article.heading}
              </div>
              <div class='mt-4 w-full lg:hidden'>
                <img
                  {...props.article.image}
                  width='1920'
                  height='1280'
                  loading='lazy'
                />
              </div>
            </div>

            <p class='whitespace-pre-line px-10 text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 lg:px-0'>
              {props.article.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
});
