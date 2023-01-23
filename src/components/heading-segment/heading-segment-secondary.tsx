import { component$ } from "@builder.io/qwik";
import type { HeadingSegmentProps } from "./heading-segment.props";

export const HeadingSegmentSecondary = component$(
  (props: HeadingSegmentProps) => (
    <span class="text-secondary">{props.text}</span>
  )
);
