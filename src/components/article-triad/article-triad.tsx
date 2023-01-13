import { component$, Slot } from '@builder.io/qwik';

export const ArticleTriad = component$(() => {
  return (
    <article class="grid grid-cols-9">
      <div class="z-20 row-span-full col-start-1 col-span-4 p-14 shadow-md  self-center bg-white">
        <Slot name="article"></Slot>
      </div>
      <div class="z-10 row-span-full col-start-4 col-span-5 ">
        <Slot name="image"></Slot>
      </div>
      <div class="z-0 row-span-full col-end-8 self-end  w-48 h-96 bg-primary"></div>
    </article>
  );
});
