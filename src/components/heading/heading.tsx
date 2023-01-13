import { component$, Slot } from '@builder.io/qwik';

export const Heading = component$(() => {
  return (
    <h2>
      <span class="text-blue font-bold text-4xl">
        <Slot name="primary"></Slot>
      </span>
      <br />
      <span class="text-accent font-bold text-4xl">
        <Slot name="accent"></Slot>
      </span>
    </h2>
  );
});
