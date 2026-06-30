import { component$ } from '@builder.io/qwik';
import type { MenuAd } from '../types/menu-ad.type';

export const NavMenuAd = component$(({ ad }: { ad: MenuAd }) => {
  return (
    <aside class='flex w-[36rem] shrink-0 items-center justify-center bg-gray-300 p-8'>
      <div class='flex h-fit items-start gap-5 '>
        <div class='shrink-0'>{ad.image}</div>
        <div class='flex flex-1 flex-col items-start gap-4 self-stretch '>
          <h3 class='text-xl font-bold text-secondary-950'>{ad.headline}</h3>
          <p class='mb-auto text-lg text-gray-600'>{ad.description}</p>
          <a
            href={ad.link}
            class='rounded bg-primary px-6 py-3 text-lg font-bold text-secondary-950'
          >
            {ad.ctaText}
          </a>
        </div>
      </div>
    </aside>
  );
});
