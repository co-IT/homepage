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
    <div class={isCarouselNavigation ? 'w-full px-6 lg:px-10' : 'mx-auto max-w-5xl px-6 lg:px-10'}>
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
                <div class='rounded border border-secondary-900/10 bg-white px-20 py-10 shadow-[0_18px_40px_-30px_rgba(2,2,77,0.3)] md:px-24 lg:px-28'>
                  <h3 class='text-2xl font-bold leading-8 text-secondary-900 md:text-[2.05rem] md:leading-[1.35]'>
                    {activeExample.title}
                  </h3>
                  <p class='mt-4 whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80'>
                    {activeExample.text}
                  </p>
                </div>

                <button
                  type='button'
                  onClick$={() =>
                    (activeIndexSig.value = activeIndexSig.value === 0 ? totalExamples - 1 : activeIndexSig.value - 1)
                  }
                  class='absolute left-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-secondary-900/15 bg-white text-secondary-900/75 shadow-[0_16px_36px_-28px_rgba(2,2,77,0.28)] transition-colors hover:border-secondary-900/25 hover:text-secondary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-900 md:left-4'
                  aria-label='Vorheriges Praxisbeispiel anzeigen'
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M11.25 3.75L6 9L11.25 14.25'
                      stroke='currentColor'
                      stroke-width='1.8'
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
                  class='absolute right-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-secondary-900/15 bg-white text-secondary-900/75 shadow-[0_16px_36px_-28px_rgba(2,2,77,0.28)] transition-colors hover:border-secondary-900/25 hover:text-secondary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-900 md:right-4'
                  aria-label='Nächstes Praxisbeispiel anzeigen'
                >
                  <svg
                    width='22'
                    height='22'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M6.75 3.75L12 9L6.75 14.25'
                      stroke='currentColor'
                      stroke-width='1.8'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>

              <div class='flex items-center justify-center gap-6'>
                {props.article.examples.map((example, index) => (
                  <button
                    key={example.title}
                    type='button'
                    onClick$={() => (activeIndexSig.value = index)}
                    class={{
                      'flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none transition-colors': true,
                      'bg-secondary-900 font-semibold text-white': activeIndexSig.value === index,
                      'bg-transparent font-medium text-black hover:text-secondary-900': activeIndexSig.value !== index
                    }}
                    aria-label={`Praxisbeispiel ${index + 1} anzeigen`}
                    aria-pressed={activeIndexSig.value === index}
                  >
                    {index + 1}
                  </button>
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
