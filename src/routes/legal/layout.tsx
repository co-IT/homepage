import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class='container mx-auto'>
      <Slot></Slot>
    </div>
  );
});
