import { component$ } from '@builder.io/qwik';
import type { HeadingSegmentProps } from './heading-segment.props';

export default component$((props: HeadingSegmentProps) => (
  <span class="text-white">{props.text}</span>
));