import { component$ } from '@builder.io/qwik';
import HeadingSegmentAccent from '../heading-segment/heading-segment-accent';
import HeadingSegmentWhite from '../heading-segment/heading-segment-white';
import type { HeaderProps } from './header.props';

export default component$((props: HeaderProps) => {
  return (
    <header
      class="bg-cover bg-no-repeat bg-right-top py-16"
      style={`background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.backgroundImage.source}");`}
    >
      <div class="container mx-auto grid grid-rows-2 place-content-center text-center space-y-32">
        <section class="">
          <img
            width="173"
            height="69"
            src="/img/logo.svg"
            alt="co-IT.eu orange Logo - Inspire to Change"
          />
        </section>
        <section class="flex flex-col space-y-10 pb-16">
          <h1 class="break-words font-bold text-2xl md:text-6xl">
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
            <p class="leading-10 mx-auto max-w-3xl text-white font-semibold text-lg tracking-wider md:leading-12 md:text-xl md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
              {props.teaser}
            </p>
          </div>
        </section>
      </div>
    </header>
  );
});
