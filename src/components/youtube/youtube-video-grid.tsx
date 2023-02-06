import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { BlackCloseIcon, BlueCircleArrowIcon } from '../icons';
import type { YouTubeVideo } from './model';
import type { YouTubeVideoDialogState } from './youtube-vide-dialog.state';
import type { YouTubeVideoGridProps } from './youtube-video-grid.props';
import { YouTubeVideoTile } from './youtube-video-tile';

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
          <div class='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
            {props.videos.map(video => (
              <YouTubeVideoTile
                video={video}
                onTileClicked$={videoClicked => openVideoDialog$(videoClicked)}
              />
            ))}
          </div>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        class='m-0 h-screen w-screen rounded-xl md:m-auto md:w-3/4'
      >
        <div class='flex h-full flex-col sm:justify-between '>
          <div class='mb-5 flex w-full justify-end'>
            <div class='cursor-pointer' onClick$={() => closeVideoDialog$()}>
              <BlackCloseIcon />
            </div>
          </div>

          <div class='mb-8 flex flex-col gap-y-4'>
            <div class='h-1 w-10 bg-accent'></div>
            <div class='text-4xl font-bold leading-10 text-secondary-900'>
              {videoDialog.videoPlaying.title}
            </div>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${videoDialog.videoPlaying.id}`}
            class='mb-5 aspect-video max-h-96'
          />

          {/* <div class='text-sm font-medium text-secondary leading-6 mb-4 opacity-80'>
            {videoDialog.videoPlaying.description}
          </div> */}

          <div class='flex justify-between border-t border-b border-gray-200 py-5 px-8'>
            <button
              onClick$={() => showPreviousVideo$()}
              disabled={!videoDialog.videoPlayingHasPredecessor}
              class='flex cursor-pointer flex-row gap-x-5 hover:opacity-75 disabled:opacity-50'
            >
              <div class='rotate-180'>
                <BlueCircleArrowIcon />
              </div>

              <div class='my-auto flex flex-col gap-y-1'>
                <div class='hidden text-lg font-normal leading-4 text-secondary-900'>
                  Zum nächsten Thema
                </div>
                <div class='text-lg font-bold leading-5 text-secondary-900'>
                  Previous
                </div>
              </div>
            </button>

            <button
              onClick$={() => showNextVideo$()}
              disabled={!videoDialog.videoPlayingHasSuccessor}
              class='flex cursor-pointer flex-row gap-x-5 hover:opacity-75 disabled:opacity-50'
            >
              <div class='my-auto flex flex-col gap-y-1'>
                <div class='hidden text-lg font-normal leading-4 text-secondary-900'>
                  Zum nächsten Thema
                </div>
                <div class={`text-lg font-bold leading-5 text-secondary-900`}>
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
