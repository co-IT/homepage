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
          ? 'w-full bg-white rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center cursor-pointer hover:opacity-100'
          : 'w-full bg-[#ffcd61] rounded-xl px-4 py-10 flex flex-col gap-y-6 items-center cursor-pointer hover:bg-white'
      }
      onClick$={() => props.onLinkClick$?.(props.link)}
    >
      <h2 class="text-lg text-secondary font-bold leading-5">
        {props.link.heading}
      </h2>

      <div class="h-0.5 w-4 bg-black" />

      <p class="text-lg text-secondary font-semibold leading-5 text-center">
        {props.link.text}
      </p>
    </div>
  );
});
