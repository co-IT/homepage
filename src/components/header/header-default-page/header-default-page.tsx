import { $, component$, useContext } from '@builder.io/qwik';
import type { NavigationState } from '~/components/navigation/navigation.context';
import { NavigationContext } from '~/components/navigation/navigation.context';
import { HeadingSegmentWhite } from '../../heading-segment';
import { MenuIcon } from '../../icons';
import { Logo } from '../../logo/logo';
import type { HeaderDefaultPageProps } from './header-default-page.props';

export const HeaderDefaultPage = component$((props: HeaderDefaultPageProps) => {
  const menuState = useContext<NavigationState>(NavigationContext);
  const openMenu = $(() => {
    menuState.isOpen = true;
  });

  return (
    <header class='mb-8 bg-secondary-900'>
      <div class='container mx-auto grid grid-rows-3'>
        <section class='flex h-fit justify-center pt-6 md:justify-between'>
          <Logo />

          <div
            class='my-auto hidden cursor-pointer flex-row gap-x-4 hover:opacity-75 md:block'
            onClick$={() => openMenu()}
          >
            <MenuIcon />
          </div>
        </section>
        <section></section>
        <section class='flex flex-col space-y-10 pb-16 text-center'>
          <h1 class='text-2xl font-bold md:text-5xl'>
            <HeadingSegmentWhite text={props.heading} />
          </h1>
        </section>
      </div>
    </header>
  );
});
