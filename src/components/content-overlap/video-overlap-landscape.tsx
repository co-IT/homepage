import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { YoutubeVideoPlayerEmbedded } from '../youtube/youtube-video-player-embedded';

/**
 *
 * -translate-y-1/3
 *
 */

export const VideoOverlapLandscape = component$(
  (props: { youTubeVideoId: string } & QwikIntrinsicElements['div']) => {
    const { youTubeVideoId, ...divProps } = props;
    return (
      <div {...divProps}>
        <article class='grid-grid-rows-3 grid auto-rows-min md:grid-cols-8'>
          {/* Text Slot */}
          <div class='z-10 row-start-3 mx-3 -translate-y-[11em] self-center bg-white pb-10 pl-5 pr-5 pt-10 drop-shadow-2xl md:col-span-6 md:col-start-3 md:row-start-1 md:-translate-y-0 md:p-14 xl:-translate-x-20'>
            <Slot></Slot>
          </div>
          {/* Video */}
          <div class='z-20 row-start-1 aspect-video w-full -translate-y-8 border-0 md:col-span-6 md:col-start-3 md:row-start-2 md:-translate-x-8 xl:-translate-x-28'>
            <YoutubeVideoPlayerEmbedded
              youTubeVideoId={youTubeVideoId}
              class='w-full'
            ></YoutubeVideoPlayerEmbedded>
          </div>
          {/* Orange rectangle */}
          <div class='z-0 row-start-2 h-36 -translate-y-[10em] bg-primary md:col-span-2 md:col-start-2 md:h-[32rem] md:w-48 md:self-end lg:-translate-y-1/3 xl:h-[40rem]'></div>
        </article>
      </div>
    );
  }
);
