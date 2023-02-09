import { component$ } from '@builder.io/qwik';
import {
  HeadingSegmentAccent,
  HeadingSegmentWhite
} from '../../heading-segment';
import type { HeaderLandingPageProps } from './header-landing-page.props';

export const HeaderLandingPage = component$((props: HeaderLandingPageProps) => {
  return (
    <>
      <h1 class='text-2xl font-bold md:text-6xl'>
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

      <div class=' bg-secondary-900 md:bg-opacity-0'>
        <p class='max-w-3xl p-8 text-lg leading-8 tracking-wider text-white md:text-xl md:font-semibold md:leading-10 md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]'>
          {props.teaser}
        </p>
      </div>
    </>
  );
});
