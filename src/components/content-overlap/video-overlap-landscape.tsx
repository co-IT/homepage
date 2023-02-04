import { component$, Slot } from '@builder.io/qwik';

export const VideoOverlapLandscape = component$(
  (props: { youTubeVideoId: string }) => {
    return (
      <article class='grid grid-grid-rows-3 auto-rows-min md:grid-cols-8'>
        <div class='z-10 row-start-3 md:row-start-1 -translate-y-1/3 md:-translate-y-0 drop-shadow-2xl xl:-translate-x-20 mx-3 pt-10 pb-10 pr-5 pl-5 md:col-start-3 md:col-span-6 md:p-14 self-center bg-white'>
          <Slot></Slot>
        </div>
        <iframe
          class='z-20 w-full aspect-video row-start-1 -translate-y-8 md:row-start-2 md:col-start-3 md:col-span-6 md:-translate-x-8 xl:-translate-x-28'
          src={`https://www.youtube.com/embed/${props.youTubeVideoId}`}
        ></iframe>
        <div class='z-0 row-start-2 bg-primary -translate-y-1/2 lg:-translate-y-1/3 md:col-start-2 md:col-span-2 md:self-end h-36 md:w-48 md:h-[32rem] xl:h-[40rem]'></div>
      </article>
    );
  }
);
