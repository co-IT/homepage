import { component$, Slot } from '@builder.io/qwik';

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
export const ArticleTriad = component$(() => {
  return (
    <article class="grid grid-cols-8">
      <div class="z-20 row-span-full col-start-1 col-span-4 p-14 shadow-md  self-center bg-white">
        <Slot name="article"></Slot>
      </div>
      <div class="z-10 row-span-full col-start-4 col-span-4 ">
        <Slot name="image"></Slot>
      </div>
      <div class="z-0 row-span-full col-start-7 xl:col-start-6  self-end translate-y-10 w-48 md:h-[32rem] h-[40rem] bg-primary"></div>
    </article>
  );
});
