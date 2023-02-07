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
        `${path === props.link.path + '/' ? ' bg-white hover:opacity-100' : 'bg-[#ffcd61] hover:bg-white'}  flex flex-col w-full cursor-pointer items-center gap-y-4 rounded-xl p-2`
      }
      onClick$={() => props.onLinkClick$?.(props.link)}
    >
      <h2 class=' md:text-lg font-bold text-secondary-900'>
        {props.link.heading}
      </h2>

      <i class='block mx-auto h-[1px] w-9 bg-black' />

      <p class='text-center  md:text-lg font-semibold text-secondary-900'>
        {props.link.text}
      </p>
    </div>
  );
});
