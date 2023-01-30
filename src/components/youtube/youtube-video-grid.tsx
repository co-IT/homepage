import { $, component$, useStore } from '@builder.io/qwik';
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

  const closeVideoDialog$ = $(() => (videoDialog.isOpen = false));

  const showPreviousVideo$ = $(() => {
    const previousVideoIndex =
      props.videos.findIndex(
        video => video.id === videoDialog.videoPlaying.id
      ) - 1;

    if (previousVideoIndex < 0) return;

    videoDialog.videoPlaying = props.videos[previousVideoIndex];
  });

  const showNextVideo$ = $(() => {
    const nextVideoIndex =
      props.videos.findIndex(
        video => video.id === videoDialog.videoPlaying.id
      ) + 1;

    if (nextVideoIndex > props.videos.length - 1) return;

    videoDialog.videoPlaying = props.videos[nextVideoIndex];
  });

  return (
    <div class="flex flex-col gap-4">
      {props.videos.map(video => (
        <>
          <button onClick$={() => openVideoDialog$(video)}>
            {video.title}
          </button>
        </>
      ))}

      <Dialog open={videoDialog.isOpen}>
        <iframe
          src={`https://www.youtube.com/embed/${videoDialog.videoPlaying.id}`}
        ></iframe>
        <h3>{videoDialog.videoPlaying.title}</h3>
        <p>{videoDialog.videoPlaying.description}</p>
        <button onClick$={() => closeVideoDialog$()}>Close</button>
        <button onClick$={() => showPreviousVideo$()}>Previous</button>
        <button onClick$={() => showNextVideo$()}>Next</button>
      </Dialog>
    </div>
  );
});
