import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export const HeadingSegmentAccent = component$((props: HeadingSegmentProps) => (
  <span class='text-accent'>{props.text}</span>
));
