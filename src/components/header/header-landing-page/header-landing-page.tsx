import { component$ } from '@builder.io/qwik';
import {
  HeadingSegmentAccent,
  HeadingSegmentWhite
} from '../../heading-segment';
import { MenuIcon } from '../../icons';
import { Logo } from '../../logo';
import type { HeaderLandingPageProps } from './header-landing-page.props';

export const HeaderLandingPage = component$((props: HeaderLandingPageProps) => {
  return (
    <header
      class="bg-cover bg-no-repeat md:bg-right-top"
      style={`background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.backgroundImage.source}");`}
    >
      <div class="container mx-auto grid grid-rows-2 md:place-content-center text-center ">
        <section class="flex justify-center md:justify-between pt-6 h-fit">
          <Logo></Logo>

          <div class="hidden md:block flex-row gap-x-4 my-auto cursor-pointer hover:opacity-75">
            <MenuIcon />
            <span class="text-2xl text-white font-bold leading-7 my-auto">
              Menu
            </span>
          </div>
        </section>
        <section class="flex flex-col items-center space-y-10">
          <h1 class="font-bold text-2xl md:text-6xl">
            {props.headingSegments.map(headingSegment => (
              <>
                {headingSegment.type === 'white' ? (
                  <HeadingSegmentWhite text={headingSegment.text} />
                ) : (
                  <HeadingSegmentAccent text={headingSegment.text} />
                )}
                &nbsp;
              </>
            ))}
          </h1>

          <div class=" bg-secondary md:bg-opacity-0">
            <p class="text-lg leading-8 tracking-wider max-w-3xl text-white p-8 md:font-semibold md:text-xl md:leading-10 md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
              {props.teaser}
            </p>
          </div>
        </section>
      </div>
    </header>
  );
});
