import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import type { NavigationLink } from './model';

interface NavigationCardProps {
  link: NavigationLink;
}

export const NavigationLinkCard = component$((props: NavigationCardProps) => {
  const location = useLocation();
  const path = location.url.pathname;

  return (
    <a
      href={props.link.path}
      class={`${
        path === props.link.path + '/'
          ? ' bg-white hover:opacity-100'
          : 'bg-[#ffcd61] hover:bg-white'
      } grid aspect-square w-full cursor-pointer content-center justify-center gap-y-4 rounded-xl p-2 text-center`}
    >
      <h2 class='font-bold text-secondary-900 md:text-lg'>
        {props.link.heading}
      </h2>

      <i class='mx-auto block h-[1px] w-9 bg-black' />

      <p class='font-semibold text-secondary-900 md:text-lg'>
        {props.link.text}
      </p>
    </a>
  );
});
