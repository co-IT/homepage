import { component$, useSignal } from '@builder.io/qwik';
import { HeadingArticle } from '../heading-article';
import type { ArticlePracticeSliderBlock } from './model';

interface ArticlePracticeSliderProps {
  article: ArticlePracticeSliderBlock;
}

export const ArticlePracticeSlider = component$((props: ArticlePracticeSliderProps) => {
  const activeIndexSig = useSignal(0);
  const totalExamples = props.article.examples.length;
  const activeExample = props.article.examples[activeIndexSig.value];
  const isCarouselNavigation = props.article.navigationStyle === 'carousel';

  return (
    <div class='mx-auto max-w-5xl px-6 lg:px-10'>
      <div class='rounded border border-secondary-900/10 bg-secondary-900/5 px-6 py-8 shadow-[0_24px_60px_-32px_rgba(2,2,77,0.18)] lg:px-10'>
        <HeadingArticle text={props.article.heading} />

        {props.article.intro && (
          <p class='mb-8 whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80'>
            {props.article.intro}
          </p>
        )}

        <div class='grid gap-6'>
          {isCarouselNavigation ? (
            <div class='grid gap-4'>
              <div class='relative'>
                <div class='rounded border border-secondary-900/10 bg-white px-12 py-6 shadow-[0_18px_40px_-30px_rgba(2,2,77,0.3)] md:px-14 lg:px-16'>
                  <h3 class='text-2xl font-bold leading-8 text-secondary-900'>{activeExample.title}</h3>
                  <p class='mt-4 whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80'>
                    {activeExample.text}
                  </p>
                </div>

                <button
                  type='button'
                  onClick$={() =>
                    (activeIndexSig.value = activeIndexSig.value === 0 ? totalExamples - 1 : activeIndexSig.value - 1)
                  }
                  class='absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-900 text-white shadow-[0_14px_30px_-18px_rgba(2,2,77,0.55)] transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-900 md:left-5 md:h-11 md:w-11'
                  aria-label='Vorheriges Praxisbeispiel anzeigen'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M11.25 3.75L6 9L11.25 14.25'
                      stroke='currentColor'
                      stroke-width='2.2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>

                <button
                  type='button'
                  onClick$={() =>
                    (activeIndexSig.value = activeIndexSig.value === totalExamples - 1 ? 0 : activeIndexSig.value + 1)
                  }
                  class='absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-900 text-white shadow-[0_14px_30px_-18px_rgba(2,2,77,0.55)] transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-900 md:right-5 md:h-11 md:w-11'
                  aria-label='Nächstes Praxisbeispiel anzeigen'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M6.75 3.75L12 9L6.75 14.25'
                      stroke='currentColor'
                      stroke-width='2.2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>

              <div class='flex items-center justify-center gap-3' aria-hidden='true'>
                {props.article.examples.map((example, index) => (
                  <span
                    key={example.title}
                    class={{
                      'h-3 w-3 rounded-full transition-colors': true,
                      'bg-secondary-900': activeIndexSig.value === index,
                      'bg-secondary-900/20': activeIndexSig.value !== index
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              <div class='rounded border border-secondary-900/10 bg-white px-5 py-6 shadow-[0_18px_40px_-30px_rgba(2,2,77,0.3)]'>
                <h3 class='text-2xl font-bold leading-8 text-secondary-900'>{activeExample.title}</h3>
                <p class='mt-4 whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80'>
                  {activeExample.text}
                </p>
              </div>

              <div class='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <div class='flex flex-wrap gap-2'>
                  {props.article.examples.map((example, index) => (
                    <button
                      key={example.title}
                      type='button'
                      onClick$={() => (activeIndexSig.value = index)}
                      class={{
                        'rounded-full border px-4 py-2 text-sm font-semibold transition-colors': true,
                        'border-secondary-900 bg-secondary-900 text-white': activeIndexSig.value === index,
                        'border-secondary-900/20 bg-white text-secondary-900 hover:border-secondary-900/40':
                          activeIndexSig.value !== index
                      }}
                      aria-pressed={activeIndexSig.value === index}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <div class='flex gap-3'>
                  <button
                    type='button'
                    onClick$={() =>
                      (activeIndexSig.value = activeIndexSig.value === 0 ? totalExamples - 1 : activeIndexSig.value - 1)
                    }
                    class='rounded-full border border-secondary-900/20 bg-white px-4 py-2 text-sm font-semibold text-secondary-900 transition-colors hover:border-secondary-900/40'
                  >
                    Vorheriges
                  </button>
                  <button
                    type='button'
                    onClick$={() =>
                      (activeIndexSig.value = activeIndexSig.value === totalExamples - 1 ? 0 : activeIndexSig.value + 1)
                    }
                    class='rounded-full border border-secondary-900 bg-secondary-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-75'
                  >
                    Nächstes
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});
