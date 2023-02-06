import type { PropFunction } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import type { NavigationLink } from './model';

interface NavigationCardProps {
  link: NavigationLink;
  onLinkClick$?: PropFunction<(link: NavigationLink) => void>;
}

export const NavigationLinkCard = component$((props: NavigationCardProps) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div
      class={
        path === props.link.path + '/'
          ? 'flex w-full cursor-pointer flex-col items-center gap-y-6 rounded-xl bg-white px-4 py-10 hover:opacity-100'
          : 'flex w-full cursor-pointer flex-col items-center gap-y-6 rounded-xl bg-[#ffcd61] px-4 py-10 hover:bg-white'
      }
      onClick$={() => props.onLinkClick$?.(props.link)}
    >
      <h2 class='text-lg font-bold leading-5 text-secondary-900'>
        {props.link.heading}
      </h2>

      <div class='h-0.5 w-4 bg-black' />

      <p class='text-center text-lg font-semibold leading-5 text-secondary-900'>
        {props.link.text}
      </p>
    </div>
  );
});
