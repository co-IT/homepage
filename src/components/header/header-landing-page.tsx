import { component$ } from '@builder.io/qwik';
import HeadingSegmentAccent from '../heading-segment/heading-segment-accent';
import HeadingSegmentWhite from '../heading-segment/heading-segment-white';
import type { HeaderProps } from './header.props';

export default component$((props: HeaderProps) => {
  return (
    <header
      class="bg-cover bg-no-repeat bg-right-top p-8"
      style={`background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.backgroundImage.source}");`}
    >
      <section class="flex flex-col space-y-10">
        <h1 class="text-center">
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

        <div class="mx-auto max-w-5xl">
          <p class="leading-10 text-white font-semibold text-center text-lg tracking-wider [text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
            {props.teaser}
          </p>
        </div>
      </section>
    </header>
  );
});
