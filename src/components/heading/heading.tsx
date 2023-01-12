import { component$, Slot } from '@builder.io/qwik';

export const Heading = component$(() => {
  return (
    <h2>
      <span class="text-blue">
        <Slot name="primary"></Slot>
      </span>
      <span class="text-accent">
        <Slot name="accent"></Slot>
      </span>
    </h2>
  );
});
