import { component$ } from '@builder.io/qwik';
import { HeadingSegmentWhite } from '../../heading-segment';
import type { HeaderContentPageProps } from './header-content-page.props';

export const HeaderContentPage = component$((props: HeaderContentPageProps) => {
  return (
    <>
      <p class='text-md font-bold text-primary lg:text-xl'>
        {props.headingAccent}
      </p>
      <h1 class='text-2xl font-bold md:text-6xl'>
        <HeadingSegmentWhite text={props.heading} />
      </h1>

      {props.teaser && (
        <div class=' bg-secondary-900 md:bg-opacity-0'>
          <p class='p-8 text-lg leading-8 tracking-wider text-white md:text-xl md:font-semibold md:leading-10 md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]'>
            {props.teaser}
          </p>
        </div>
      )}

      {!props.teaser && <div class='mb-8'></div>}
    </>
  );
});
