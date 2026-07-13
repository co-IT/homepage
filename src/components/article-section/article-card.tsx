import { component$ } from '@builder.io/qwik';
import { HeadingArticle } from '../heading-article';
import { LinkCallToAction } from '../link-call-to-action';
import type { Article } from './model';

interface ArticleCardProps {
  article: Article;
}

const ArticleImage = component$((props: { article: Article }) => {
  const isRightAligned = props.article.direction === 'right';

  return (
    <div class='relative overflow-hidden border border-secondary-900/10 bg-secondary-900/5 shadow-[0_24px_60px_-32px_rgba(2,2,77,0.35)]'>
      <img {...props.article.image} class='block h-auto w-full' width='1920' height='1280' loading='lazy' />

      {props.article.imageLabel && (
        <>
          <div class='via-secondary-950/72 pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-secondary-950/95 to-transparent' />
          <div
            class={{
              'pointer-events-none absolute bottom-4 left-4 right-4 flex items-end gap-3': true,
              'justify-end text-right': isRightAligned
            }}
          >
            {isRightAligned ? (
              <>
                <span class='max-w-[85%] text-lg font-bold leading-6 tracking-[-0.02em] text-white md:text-xl'>
                  {props.article.imageLabel}
                </span>
                <span class='h-9 w-1 bg-primary shadow-[0_0_18px_rgba(255,193,56,0.45)]' />
              </>
            ) : (
              <>
                <span class='h-9 w-1 bg-primary shadow-[0_0_18px_rgba(255,193,56,0.45)]' />
                <span class='max-w-[85%] text-lg font-bold leading-6 tracking-[-0.02em] text-white md:text-xl'>
                  {props.article.imageLabel}
                </span>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
});

export const ArticleCard = component$((props: ArticleCardProps) => {
  return (
    <>
      {props.article.direction == 'right' ? (
        <div class='flex flex-col gap-x-12 lg:flex-row lg:px-10'>
          <div class='flex w-full flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <HeadingArticle text={props.article.heading} />
              <div class='mt-4 w-full lg:hidden'>
                <ArticleImage article={props.article} />
              </div>
            </div>

            <p class='whitespace-pre-line px-10 text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 lg:px-0'>
              {props.article.text}
            </p>

            {props.article.callToAction && (
              <div class='px-10 pt-2 lg:px-0'>
                <LinkCallToAction
                  href={props.article.callToAction.href}
                  aria-label={props.article.callToAction.ariaLabel}
                  title={props.article.callToAction.title}
                  target={props.article.callToAction.target}
                >
                  {props.article.callToAction.text}
                </LinkCallToAction>
              </div>
            )}
          </div>

          <div class='hidden w-full lg:block'>
            <ArticleImage article={props.article} />
          </div>
        </div>
      ) : (
        <div class='flex flex-col gap-x-12 lg:flex-row lg:px-10'>
          <div class='hidden w-full lg:block'>
            <ArticleImage article={props.article} />
          </div>

          <div class='flex w-full flex-col gap-y-5'>
            <div class='flex flex-col gap-y-4'>
              <div class='mx-auto h-1 w-10 bg-primary lg:mx-0' />
              <div class='px-6 text-center text-3xl font-bold leading-8 text-secondary-900 lg:px-0 lg:text-left lg:text-4xl lg:leading-10'>
                {props.article.heading}
              </div>
              <div class='mt-4 w-full lg:hidden'>
                <ArticleImage article={props.article} />
              </div>
            </div>

            <p class='whitespace-pre-line px-10 text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 lg:px-0'>
              {props.article.text}
            </p>

            {props.article.callToAction && (
              <div class='px-10 pt-2 lg:px-0'>
                <LinkCallToAction
                  href={props.article.callToAction.href}
                  aria-label={props.article.callToAction.ariaLabel}
                  title={props.article.callToAction.title}
                  target={props.article.callToAction.target}
                >
                  {props.article.callToAction.text}
                </LinkCallToAction>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});
