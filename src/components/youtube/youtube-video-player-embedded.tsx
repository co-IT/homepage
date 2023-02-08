import { $, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';

export interface YoutubeVideoPlayerEmbeddedProps {
  youTubeVideoId: string;
  class?: string;
}

export const YoutubeVideoPlayerEmbedded = component$(
  (props: YoutubeVideoPlayerEmbeddedProps) => {
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
        {!hasVisitorAgreedToYouTubeTermsOfUse.value ? (
          <div
            class={`mx-auto mb-5 grid aspect-video place-items-center content-center gap-y-6 border-0 bg-black/80 text-white backdrop-blur-md ${props.class}`}
          >
            <p>
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
        ) : (
          <>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${props.youTubeVideoId}`}
              class={`mx-auto mb-5 aspect-video border-0 ${props.class}`}
            />
          </>
        )}
      </>
    );
  }
);
