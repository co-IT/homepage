import { $, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';

import Thumb from '~/media/youtube-player/thumb.webp?jsx';

export interface YoutubeVideoPlayerEmbeddedProps {
  youTubeVideoId: string;
  class?: string;
  placeholderImageSrc?: string;
}

export const YoutubeVideoPlayerEmbedded = component$((props: YoutubeVideoPlayerEmbeddedProps) => {
  const hasVisitorAgreedToYouTubeTermsOfUse = useSignal<boolean>(false);

  useTask$(() => {
    if (isBrowser) {
      hasVisitorAgreedToYouTubeTermsOfUse.value = Boolean(
        sessionStorage.getItem('coITHasVisitorAgreedToYouTubeTermsOfUse')
      );
    }
  });

  const agreeToYouTubeTermsOfUse$ = $(() => {
    hasVisitorAgreedToYouTubeTermsOfUse.value = true;
    sessionStorage.setItem('coITHasVisitorAgreedToYouTubeTermsOfUse', 'true');
  });

  return (
    <>
      {hasVisitorAgreedToYouTubeTermsOfUse.value ? (
        <iframe
          loading='lazy'
          src={`https://www.youtube-nocookie.com/embed/${props.youTubeVideoId}`}
          class={`block aspect-video w-full border-0 ${props.class ?? ''}`}
        />
      ) : (
        <div class='relative overflow-hidden bg-black'>
          {props.placeholderImageSrc ? (
            <img
              src={props.placeholderImageSrc}
              alt=''
              aria-hidden='true'
              width='1322'
              height='683'
              class='block aspect-video w-full scale-[1.02] object-cover blur-[2px]'
            />
          ) : (
            <Thumb class='block w-full' />
          )}
          <div class='absolute inset-0 grid place-items-center content-center gap-y-6 bg-black/30 text-white backdrop-blur-md'>
            <p class='mb-4 px-6 text-center font-bold'>
              Durch das Abspielen von Videos stimmen Sie den{' '}
              <a
                class='text-primary hover:underline'
                href='https://www.youtube.com/static?gl=DE&template=terms&hl=de'
                target='_blank'
              >
                Nutzungsbedingungen
              </a>{' '}
              von YouTube zu.
            </p>
            <button
              onClick$={() => agreeToYouTubeTermsOfUse$()}
              class='cursor-pointer rounded-lg bg-primary p-3 font-bold text-secondary-900 hover:bg-primary/90'
            >
              Ich stimme zu und möchte das Video sehen.
            </button>
          </div>
        </div>
      )}
    </>
  );
});
