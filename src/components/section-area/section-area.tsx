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
        <section class={`${appearance} py-12 md:py-24`}>
          <div class='container mx-auto'>
            <Slot></Slot>
          </div>
        </section>
      ) : (
        <section class={`container mx-auto ${appearance} py-12 md:py-24`}>
          <Slot></Slot>
        </section>
      )}
    </>
  );
});
