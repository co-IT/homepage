import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { BlackCloseIcon, BlueCircleArrowIcon } from '../icons';
import { Markdown } from '../markdown';
import type { YouTubeVideo } from './model';
import type { YouTubeVideoDialogState } from './youtube-video-dialog.state';
import type { YouTubeVideoGridProps } from './youtube-video-grid.props';
import { YoutubeVideoPlayerEmbedded } from './youtube-video-player-embedded';
import { YouTubeVideoTile } from './youtube-video-tile';

export const YouTubeVideoGrid = component$((props: YouTubeVideoGridProps) => {
  const videoDialog = useStore<YouTubeVideoDialogState>({
    open: false,
    videoPlayingHasPredecessor: false,
    videoPlayingHasSuccessor: props.videos.length > 1,
    videoPlaying: props.videos[0],
    videoPlayingDescriptionMarkdown: ''
  });

  useVisibleTask$(({ track }) => {
    track(() => videoDialog.videoPlaying);

    fetch(
      `${location.protocol}//${location.host}/markdown/youtube-video-descriptions/${videoDialog.videoPlaying.id}.md`
    )
      .then(response =>
        response.ok
          ? response.text()
          : Promise.reject(
              `Bad response fetching YouTube Video Description ${videoDialog.videoPlaying.id}.`
            )
      )
      .then(
        markdown => (videoDialog.videoPlayingDescriptionMarkdown = markdown)
      );
  });

  useVisibleTask$(({ track }) => {
    track(() => videoDialog.open);

    const [body] = document.getElementsByTagName('body');

    if (videoDialog.open) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });

  const openVideoDialog$ = $((youTubeVideo: YouTubeVideo) => {
    videoDialog.videoPlaying = youTubeVideo;

    const videoIndex = props.videos.findIndex(
      video => youTubeVideo.id === video.id
    );

    videoDialog.videoPlayingHasPredecessor = videoIndex > 0 ? true : false;
    videoDialog.videoPlayingHasSuccessor =
      videoIndex < props.videos.length - 1 ? true : false;

    videoDialog.open = true;
  });

  const closeVideoDialog$ = $(() => (videoDialog.open = false));

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
            {props.videos.map((video, index) => (
              <YouTubeVideoTile
                video={video}
                onTileClicked$={videoClicked => openVideoDialog$(videoClicked)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        class={`${
          videoDialog.open ? 'fixed' : 'hidden'
        } bottom-0 left-0 right-0 top-0 z-50 m-0 h-screen w-screen bg-white md:m-auto`}
      >
        <div class='grid h-screen' style='grid-template-rows: auto 1fr auto'>
          <header class='flex items-center justify-between bg-black px-8 pb-8 pt-14'>
            <h2 class='text:md font-bold text-white md:text-4xl'>
              <i class='mb-2 block h-[4px] w-10 bg-primary' />
              <span>{videoDialog.videoPlaying.title}</span>
            </h2>
            <i class='cursor-pointer' onClick$={() => closeVideoDialog$()}>
              <BlackCloseIcon />
            </i>
          </header>

          <main
            class='grid space-y-8 overflow-hidden'
            style='grid-template-columns 1fr; grid-template-rows: auto 1fr '
          >
            <div class='bg-black '>
              {videoDialog.open && (
                <YoutubeVideoPlayerEmbedded
                  youTubeVideoId={videoDialog.videoPlaying.id}
                  class='md:h-[500px] md:w-[1000px]'
                />
              )}
            </div>

            <Markdown
              markdown={videoDialog.videoPlayingDescriptionMarkdown}
              class='text-secondary container mx-auto overflow-y-auto px-4 text-sm font-medium leading-6 md:w-[900px]'
            />
          </main>

          <footer class='container mx-auto flex justify-between border-b border-t border-gray-200 px-8 py-5 md:w-[1000px]'>
            <button
              onClick$={() => showPreviousVideo$()}
              disabled={!videoDialog.videoPlayingHasPredecessor}
              class='flex cursor-pointer flex-row gap-x-5 hover:opacity-75 disabled:opacity-50'
            >
              <div class='rotate-180'>
                <BlueCircleArrowIcon />
              </div>

              <div class='my-auto flex flex-col gap-y-1'>
                <div class='hidden text-lg font-normal leading-4 text-secondary-900 sm:block'>
                  Zum vorigen Thema
                </div>
              </div>
            </button>

            <button
              onClick$={() => showNextVideo$()}
              disabled={!videoDialog.videoPlayingHasSuccessor}
              class='flex cursor-pointer flex-row gap-x-5 hover:opacity-75 disabled:opacity-50'
            >
              <div class='my-auto flex flex-col gap-y-1'>
                <div class='hidden text-lg font-normal leading-4 text-secondary-900 sm:block'>
                  Zum nächsten Thema
                </div>
              </div>

              <BlueCircleArrowIcon />
            </button>
          </footer>
        </div>
      </div>
    </>
  );
});
