import { component$, Slot } from '@builder.io/qwik';

interface ContentOverlapPortraitProps {
  image: {
    source: string;
    alternateText: string;
  };
}

/**
 * Consists of three elements
 * 1. A textbox overlapping...
 * 2. ...An image being overlapped by...
 * 3. ... a coloured border
 *
 * Overlapping is solved using a CSS Grid having 9 columns.
 * The textbox stretches from column 1 to column 4.
 * The image starts at column 4 goes to column 9.
 * The border starts at column 8
 */
export const ContentOverlapPortrait = component$(
  (props: ContentOverlapPortraitProps) => {
    return (
      <article class='grid auto-rows-min md:grid-cols-8 md:grid-rows-1'>
        <div class='z-20 row-start-3 mx-3 -translate-y-28 self-center bg-white pb-10 pl-5 pr-5 pt-10 drop-shadow-2xl md:col-span-4 md:col-start-2 md:row-span-full md:-translate-y-0 md:p-14'>
          <Slot name='article'></Slot>
        </div>
        <div class='z-10 row-start-1 md:col-span-3 md:col-start-5 md:row-span-full'>
          <img
            class='shadow-xl'
            width='480'
            height='586'
            src={props.image.source}
            alt={props.image.alternateText}
          />
        </div>
        <div class='z-0 row-start-2 h-4 bg-primary md:col-start-7 md:row-span-full md:h-[32rem] md:w-48 md:translate-y-10 md:self-end xl:col-start-7 xl:h-[40rem]'></div>
      </article>
    );
  }
);
