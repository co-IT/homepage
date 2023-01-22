import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export default component$((props: HeadingSegmentProps) => (
  <span class="text-secondary font-bold text-4xl">{props.text}</span>
));