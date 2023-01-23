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
      <article class="grid auto-rows-min md:grid-cols-8 md:grid-rows-1">
        <div class="z-20 row-start-3 -translate-y-28 drop-shadow-2xl mx-3 pt-10 pb-10 pr-5 pl-5 md:-translate-y-0 md:row-span-full md:col-start-2 md:col-span-4 md:p-14 self-center bg-white">
          <Slot name="article"></Slot>
        </div>
        <div class="z-10 row-start-1 md:row-span-full md:col-start-5 md:col-span-3">
          <img
            class="shadow-xl"
            src={props.image.source}
            alt={props.image.alternateText}
          />
        </div>
        <div class="z-0 row-start-2 md:row-span-full md:col-start-7 xl:col-start-7 md:self-end md:translate-y-10 h-4 md:w-48 md:h-[32rem] xl:h-[40rem] bg-primary"></div>
      </article>
    );
  }
);
