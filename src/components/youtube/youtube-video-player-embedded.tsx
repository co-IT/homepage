import { component$ } from '@builder.io/qwik';

export interface YoutubeVideoPlayerEmbeddedProps {
  youTubeVideoId: string;
}

export const YoutubeVideoPlayerEmbedded = component$(
  (props: YoutubeVideoPlayerEmbeddedProps) => {
    return (
      <>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${props.youTubeVideoId}`}
          class='mx-auto mb-5 aspect-video border-0 md:h-[500px] md:w-[1000px]'
        />
      </>
    );
  }
);
