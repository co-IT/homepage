import { component$ } from '@builder.io/qwik';
import { HeadingSegmentWhite } from '../../heading-segment';
import type { HeaderDefaultPageProps } from './header-default-page.props';

export const HeaderDefaultPage = component$((props: HeaderDefaultPageProps) => {
  return (
    <h1 class='mb-8 text-2xl font-bold md:text-5xl'>
      <HeadingSegmentWhite text={props.heading} />
    </h1>
  );
});
