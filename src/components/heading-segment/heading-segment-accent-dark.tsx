import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export const HeadingSegmentSecondary800 = component$(
  (props: HeadingSegmentProps) => (
    <span class='text-secondary-800'>{props.text}</span>
  )
);
