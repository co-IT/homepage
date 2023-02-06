import type { PropFunction } from '@builder.io/qwik';
import { $, component$, useOn } from '@builder.io/qwik';
import { WhiteVideoPlayerIcon } from '../icons';
import type { YouTubeVideo } from './model';

export interface YouTubeVideoTileProps {
  video: YouTubeVideo;
  onTileClicked$?: PropFunction<(video: YouTubeVideo) => void>;
}

export const YouTubeVideoTile = component$((props: YouTubeVideoTileProps) => {
  useOn(
    'click',
    $(() => props.onTileClicked$?.(props.video))
  );

  return (
    <div class='flex flex-col'>
      <div class='relative h-44 w-full cursor-pointer rounded-tl-xl rounded-tr-xl bg-gray-900'>
        <img
          class='bg-secondary relative h-44 w-full rounded-tl-xl rounded-tr-xl object-cover opacity-50'
          src={props.video.thumb}
          alt='img'
        />
        <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 hover:opacity-75'>
          <WhiteVideoPlayerIcon />
        </div>
      </div>
      <div class='text-secondary h-28 rounded-bl-xl rounded-br-xl bg-primary px-6 py-4 text-2xl font-bold leading-6'>
        {props.video.title}
      </div>
    </div>
  );
});
