import { component$, Slot } from '@builder.io/qwik';

interface ContentOverlapLandscapeProps {
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
export const ContentOverlapLandscape = component$(
  (props: ContentOverlapLandscapeProps) => {
    return (
      <article class='grid auto-rows-min md:grid-cols-8 md:grid-rows-1'>
        <div class='z-20 row-start-3 mx-3 -translate-y-28 self-center bg-white pt-10 pb-10 pr-5 pl-5 drop-shadow-2xl md:col-span-6 md:col-start-3 md:row-span-full md:translate-y-60 md:p-14 xl:-translate-x-20'>
          <Slot name='article'></Slot>
        </div>
        <div class='z-10 row-start-1 md:col-span-6 md:col-start-3 md:row-span-full md:-translate-x-8 xl:-translate-x-28'>
          <img
            class='shadow-xl'
            src={props.image.source}
            alt={props.image.alternateText}
          />
        </div>
        <div class='z-0 row-start-2 h-4 bg-primary md:col-span-2 md:col-start-2 md:row-span-full md:h-[32rem] md:w-48 md:translate-y-10 md:self-end xl:h-[40rem]'></div>
      </article>
    );
  }
);
