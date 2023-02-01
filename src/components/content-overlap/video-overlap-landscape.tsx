import { component$, Slot } from '@builder.io/qwik';

export const VideoOverlapLandscape = component$(
  (props: { youTubeVideoId: string }) => {
    return (
      <article class='grid grid-grid-rows-3 auto-rows-min md:grid-cols-8'>
        <div class='z-10 row-start-3 md:row-start-1 drop-shadow-2xl -translate-y-28 xl:-translate-x-20 mx-3 pt-10 pb-10 pr-5 pl-5 md:row-span-full md:col-start-3 md:col-span-6 md:p-14  self-center bg-white'>
          <Slot></Slot>
        </div>
        <iframe
          class='z-20 aspect-video w-full row-start-1 md:row-start-2 md:col-start-3 md:col-span-6 md:-translate-y-32 lg:-translate-y-52 xl:-translate-y-72 md:-translate-x-8 xl:-translate-x-28'
          src={`https://www.youtube.com/embed/${props.youTubeVideoId}`}
        ></iframe>
        <div class='z-0 row-start-2 md:row-start-1 md:row-span-full bg-primary md:col-start-2 md:col-span-2 md:self-end md:translate-y-10 h-36 md:w-48 md:h-[32rem] xl:h-[40rem]'></div>
      </article>
    );
  }
);
