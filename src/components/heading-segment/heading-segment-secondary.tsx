import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export const HeadingSegmentSecondary = component$(
  (props: HeadingSegmentProps) => (
    <span class='text-secondary-900'>{props.text}</span>
  )
);
