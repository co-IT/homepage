import { component$, Slot } from '@builder.io/qwik';

export interface SectionAreaProps {
  backgroundColor: 'white' | 'gray';
}

export const SectionArea = component$((props: SectionAreaProps) => {
  const backgroundColor =
    props.backgroundColor === 'white'
      ? 'bg-white'
      : props.backgroundColor === 'gray'
      ? 'bg-gray-50'
      : 'white';

  return (
    <section class={`${backgroundColor} first:pt-24 md:py-28`}>
      <Slot></Slot>
    </section>
  );
});
