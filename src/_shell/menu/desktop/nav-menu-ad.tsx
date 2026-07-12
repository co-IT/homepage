import { component$ } from '@builder.io/qwik';
import type { MenuAd } from '../types/menu-ad.type';

export const NavMenuAd = component$(({ ad }: { ad: MenuAd }) => {
  return (
    <aside class='desktop-menu-ad flex min-w-0 items-center justify-center bg-gray-300 p-8'>
      <div class='flex h-fit max-w-full items-start gap-5'>
        <div class='shrink-0'>{ad.image}</div>
        <div class='flex min-w-0 flex-1 flex-col items-start gap-4 self-stretch'>
          <h3 class='break-words text-xl font-bold leading-7 text-secondary-950'>{ad.headline}</h3>
          <p class='mb-auto break-words text-base leading-7 text-gray-600'>{ad.description}</p>
          <a href={ad.link} class='rounded bg-primary px-6 py-3 text-lg font-bold text-secondary-950'>
            {ad.ctaText}
          </a>
        </div>
      </div>
    </aside>
  );
});
