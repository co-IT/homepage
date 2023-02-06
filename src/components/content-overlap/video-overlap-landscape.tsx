import { component$, Slot } from '@builder.io/qwik';

export const VideoOverlapLandscape = component$(
  (props: { youTubeVideoId: string }) => {
    return (
      <article class='grid-grid-rows-3 grid auto-rows-min md:grid-cols-8'>
        <div class='z-10 row-start-3 mx-3 -translate-y-1/3 self-center bg-white pt-10 pb-10 pr-5 pl-5 drop-shadow-2xl md:col-span-6 md:col-start-3 md:row-start-1 md:-translate-y-0 md:p-14 xl:-translate-x-20'>
          <Slot></Slot>
        </div>
        <iframe
          class='z-20 row-start-1 aspect-video w-full -translate-y-8 md:col-span-6 md:col-start-3 md:row-start-2 md:-translate-x-8 xl:-translate-x-28'
          src={`https://www.youtube.com/embed/${props.youTubeVideoId}`}
        ></iframe>
        <div class='z-0 row-start-2 h-36 -translate-y-1/2 bg-primary md:col-span-2 md:col-start-2 md:h-[32rem] md:w-48 md:self-end lg:-translate-y-1/3 xl:h-[40rem]'></div>
      </article>
    );
  }
);
