import { component$, Slot } from '@builder.io/qwik';

export interface SectionAreaProps {
  backgroundColor?: 'white' | 'gray';
}

export const SectionArea = component$((props: SectionAreaProps) => {
  const appearance: 'bg-white' | 'bg-gray-100' =
    props.backgroundColor === 'white'
      ? 'bg-white'
      : props.backgroundColor === 'gray'
      ? 'bg-gray-100'
      : 'bg-white';

  return (
    <>
      {appearance === 'bg-gray-100' ? (
        <section class={`${appearance} first:pt-24 md:py-32`}>
          <div class='container mx-auto'>
            <Slot></Slot>
          </div>
        </section>
      ) : (
        <section class={`container mx-auto ${appearance} first:pt-24 md:py-32`}>
          <Slot></Slot>
        </section>
      )}
    </>
  );
});
