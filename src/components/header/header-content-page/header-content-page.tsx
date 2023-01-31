import { $, component$, useContext } from '@builder.io/qwik';
import type { NavigationState } from '~/components/navigation/navigation.context';
import { NavigationContext } from '~/components/navigation/navigation.context';
import { HeadingSegmentWhite } from '../../heading-segment';
import { MenuIcon } from '../../icons';
import { Logo } from '../../logo/logo';
import type { HeaderContentPageProps } from './header-content-page.props';

export const HeaderContentPage = component$((props: HeaderContentPageProps) => {
  const menuState = useContext<NavigationState>(NavigationContext);
  const openMenu = $(() => {
    menuState.isOpen = true;
  });

  return (
    <header
      class="bg-cover bg-no-repeat md:bg-right-top"
      style={`background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.backgroundImage.source}");`}
    >
      <div class="container mx-auto grid grid-rows-2">
        <section class="flex justify-center md:justify-between pt-6 h-fit">
          <Logo />

          <div
            class="hidden md:block flex-row gap-x-4 my-auto cursor-pointer hover:opacity-75"
            onClick$={() => openMenu()}
          >
            <MenuIcon />
          </div>
        </section>
        <section class="flex flex-col space-y-10 pb-16 text-center">
          <small class="text-accent  font-bold text-sm">
            {props.headingAccent}
          </small>
          <h1 class="font-bold text-2xl md:text-6xl">
            <HeadingSegmentWhite text={props.heading} />
          </h1>

          {props.teaser && (
            <div class=" bg-secondary md:bg-opacity-0">
              <p class="text-lg leading-10 mx-auto max-w-3xl text-white font-semibold  tracking-wider md:text-xl md:leading-10 md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
                {props.teaser}
              </p>
            </div>
          )}
        </section>
      </div>
    </header>
  );
});
