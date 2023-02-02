import { $, component$, useStore } from '@builder.io/qwik';
import { BlackCloseIcon, BlueArrowIcon, BlueCircleArrowIcon, WhiteVideoPlayerIcon } from '../icons';
import { Dialog } from './dialog';
import type { YouTubeVideo } from './model';
import type { YouTubeVideoDialogState } from './youtube-vide-dialog.state';
import type { YouTubeVideoGridProps } from './youtube-video-grid.props';

export const YouTubeVideoGrid = component$((props: YouTubeVideoGridProps) => {
  const videoDialog = useStore<YouTubeVideoDialogState>({
    isOpen: false,
    videoPlaying: props.videos[0]
  });

  const openVideoDialog$ = $((youTubeVideo: YouTubeVideo) => {
    videoDialog.videoPlaying = youTubeVideo;
    videoDialog.isOpen = true;
  });

  const closeVideoDialog$ = $(() => {
    videoDialog.isOpen = false;
  });

  const showPreviousVideo$ = $(() => {
    const previousVideoIndex = props.videos.findIndex(video => video.id === videoDialog.videoPlaying.id) - 1;
    if (previousVideoIndex < 0) return;
    videoDialog.videoPlaying = props.videos[previousVideoIndex];
  });

  const showNextVideo$ = $(() => {
    const nextVideoIndex = props.videos.findIndex(video => video.id === videoDialog.videoPlaying.id) + 1;
    if (nextVideoIndex > props.videos.length - 1) return;
    videoDialog.videoPlaying = props.videos[nextVideoIndex];
  });

  return (
    <div class="container mx-auto">
      <Dialog open={videoDialog.isOpen}>
        <div class="z-50 w-full shadow-2xl border border-gray-200 rounded-xl flex flex-col px-7 py-4">
          <div class="w-full flex justify-end mb-5">
            <div class="cursor-pointer" onClick$={() => closeVideoDialog$()}>
              <BlackCloseIcon />
            </div>
          </div>

          <div class="flex flex-col gap-y-4 mb-8">
            <div class="bg-accent w-10 h-1"></div>
            <div class="text-4xl text-secondary-900 font-bold leading-10">{videoDialog.videoPlaying.title}</div>
          </div>

          <iframe src={`https://www.youtube.com/embed/${videoDialog.videoPlaying.id}`} height="400px" class="mb-5" />

          <div class="text-sm font-medium text-secondary leading-6 mb-4 opacity-80">
            {videoDialog.videoPlaying.description}
          </div>

          <div class="flex justify-between py-5 px-8 border-t border-b border-gray-200">
            <div class="flex flex-row gap-x-5 cursor-pointer hover:opacity-75">
              <div class="rotate-180" onClick$={() => showPreviousVideo$()}>
                <BlueCircleArrowIcon />
              </div>

              <div class="flex flex-col gap-y-1 my-auto">
                <div class="text-lg text-secondary-900 font-normal leading-4 hidden">
                  Zum nächsten Thema
                </div>
                <div class="text-lg text-secondary-900 font-bold leading-5">
                  Previous
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-x-5 cursor-pointer hover:opacity-75">
              <div class="flex flex-col gap-y-1 my-auto">
                <div class="text-lg text-secondary-900 font-normal leading-4 hidden">
                  Zum nächsten Thema
                </div>
                <div class="text-lg text-secondary-900 font-bold leading-5">
                  Next
                </div>
              </div>

              <div onClick$={() => showNextVideo$()}>
                <BlueCircleArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <div class="mb-4 w-10 bg-accent h-1 mx-auto"></div>

      <div class="flex flex-col gap-y-14 px-8 lg:px-0">
        <div class="text-center text-4xl text-secondary font-bold leading-10">
          Wie wir zusammenarbeiten
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {props.videos.map(video => (
            <div class="flex flex-col">
              <div class="w-full rounded-tl-xl rounded-tr-xl h-44 relative cursor-pointer" onClick$={() => openVideoDialog$(video)}>
                <img
                  class="w-full rounded-tl-xl rounded-tr-xl h-44 bg-secondary relative object-cover"
                  src={video.thumb}
                  alt='img'
                />
                <div class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:opacity-75">
                  <WhiteVideoPlayerIcon />
                </div>
              </div>
              <div class="rounded-bl-xl rounded-br-xl bg-primary px-6 py-4 text-2xl font-bold text-secondary leading-6 h-28">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
