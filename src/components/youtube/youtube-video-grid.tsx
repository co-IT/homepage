import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import {
  BlackCloseIcon,
  BlueCircleArrowIcon,
  WhiteVideoPlayerIcon
} from '../icons';
import type { YouTubeVideo } from './model';
import type { YouTubeVideoDialogState } from './youtube-vide-dialog.state';
import type { YouTubeVideoGridProps } from './youtube-video-grid.props';

export const YouTubeVideoGrid = component$((props: YouTubeVideoGridProps) => {
  const videoDialog = useStore<YouTubeVideoDialogState>({
    videoPlayingHasPredecessor: false,
    videoPlayingHasSuccessor: props.videos.length > 1,
    videoPlaying: props.videos[0]
  });

  const dialogRef = useSignal<HTMLDialogElement>();

  const openVideoDialog$ = $((youTubeVideo: YouTubeVideo) => {
    videoDialog.videoPlaying = youTubeVideo;
    dialogRef.value?.showModal();
  });

  const closeVideoDialog$ = $(() => {
    dialogRef.value?.close();
  });

  const showPreviousVideo$ = $(() => {
    const previousVideoIndex =
      props.videos.findIndex(
        video => video.id === videoDialog.videoPlaying.id
      ) - 1;
    if (previousVideoIndex < 0) {
      return;
    }

    videoDialog.videoPlayingHasSuccessor = true;

    if (previousVideoIndex - 1 < 0) {
      videoDialog.videoPlayingHasPredecessor = false;
    }

    videoDialog.videoPlaying = props.videos[previousVideoIndex];
  });

  const showNextVideo$ = $(() => {
    const nextVideoIndex =
      props.videos.findIndex(
        video => video.id === videoDialog.videoPlaying.id
      ) + 1;

    if (nextVideoIndex > props.videos.length - 1) {
      return;
    }
    videoDialog.videoPlayingHasPredecessor = true;

    if (nextVideoIndex + 1 > props.videos.length - 1) {
      videoDialog.videoPlayingHasSuccessor = false;
    }

    videoDialog.videoPlaying = props.videos[nextVideoIndex];
  });

  return (
    <>
      <div class='container mx-auto'>
        <div class='flex flex-col gap-y-14 px-8 lg:px-0'>
          <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
            {props.videos.map(video => (
              <div class='flex flex-col'>
                <div
                  class='w-full rounded-tl-xl rounded-tr-xl h-44 relative cursor-pointer'
                  onClick$={() => openVideoDialog$(video)}
                >
                  <img
                    class='w-full rounded-tl-xl rounded-tr-xl h-44 bg-secondary relative object-cover'
                    src={video.thumb}
                    alt='img'
                  />
                  <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:opacity-75'>
                    <WhiteVideoPlayerIcon />
                  </div>
                </div>
                <div class='rounded-bl-xl rounded-br-xl bg-primary px-6 py-4 text-2xl font-bold text-secondary leading-6 h-28'>
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        class='w-screen h-screen m-0 md:m-auto md:w-3/4 rounded-xl'
      >
        <div class='flex flex-col sm:justify-between h-full '>
          <div class='w-full flex justify-end mb-5'>
            <div class='cursor-pointer' onClick$={() => closeVideoDialog$()}>
              <BlackCloseIcon />
            </div>
          </div>

          <div class='flex flex-col gap-y-4 mb-8'>
            <div class='bg-accent w-10 h-1'></div>
            <div class='text-4xl text-secondary-900 font-bold leading-10'>
              {videoDialog.videoPlaying.title}
            </div>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${videoDialog.videoPlaying.id}`}
            class='aspect-video max-h-96 mb-5'
          />

          {/* <div class='text-sm font-medium text-secondary leading-6 mb-4 opacity-80'>
            {videoDialog.videoPlaying.description}
          </div> */}

          <div class='flex justify-between py-5 px-8 border-t border-b border-gray-200'>
            <button
              onClick$={() => showPreviousVideo$()}
              disabled={!videoDialog.videoPlayingHasPredecessor}
              class='flex flex-row gap-x-5 cursor-pointer hover:opacity-75 disabled:opacity-50'
            >
              <div class='rotate-180'>
                <BlueCircleArrowIcon />
              </div>

              <div class='flex flex-col gap-y-1 my-auto'>
                <div class='text-lg text-secondary-900 font-normal leading-4 hidden'>
                  Zum nächsten Thema
                </div>
                <div class='text-lg text-secondary-900 font-bold leading-5'>
                  Previous
                </div>
              </div>
            </button>

            <button
              onClick$={() => showNextVideo$()}
              disabled={!videoDialog.videoPlayingHasSuccessor}
              class='flex flex-row gap-x-5 cursor-pointer hover:opacity-75 disabled:opacity-50'
            >
              <div class='flex flex-col gap-y-1 my-auto'>
                <div class='text-lg text-secondary-900 font-normal leading-4 hidden'>
                  Zum nächsten Thema
                </div>
                <div class={`text-lg text-secondary-900 font-bold leading-5`}>
                  Next
                </div>
              </div>

              <BlueCircleArrowIcon />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
});
