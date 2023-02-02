import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export const HeadingSegmentAccentDark = component$(
  (props: HeadingSegmentProps) => (
    <span class='text-accent-dark'>{props.text}</span>
  )
);
