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
          <div class='rounded border border-secondary-900/10 bg-white px-5 py-6 shadow-[0_18px_40px_-30px_rgba(2,2,77,0.3)]'>
            <div class='mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary-900/60'>
              Beispiel {activeIndexSig.value + 1} von {totalExamples}
            </div>
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
                onClick$={() => (activeIndexSig.value = activeIndexSig.value === 0 ? totalExamples - 1 : activeIndexSig.value - 1)}
                class='rounded-full border border-secondary-900/20 bg-white px-4 py-2 text-sm font-semibold text-secondary-900 transition-colors hover:border-secondary-900/40'
              >
                Vorheriges
              </button>
              <button
                type='button'
                onClick$={() => (activeIndexSig.value = activeIndexSig.value === totalExamples - 1 ? 0 : activeIndexSig.value + 1)}
                class='rounded-full border border-secondary-900 bg-secondary-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary-800'
              >
                Nächstes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
