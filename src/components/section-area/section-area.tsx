import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export type SectionAreaProps = QwikIntrinsicElements['section'] & {
  backgroundColor?: 'white' | 'gray';
};

export const SectionArea = component$((props: SectionAreaProps) => {
  const appearance: 'bg-white' | 'bg-gray-100' =
    props.backgroundColor === 'white'
      ? 'bg-white'
      : props.backgroundColor === 'gray'
      ? 'bg-gray-100'
      : 'bg-white';

  return (
    <>
      <section id={props.id} class={`${appearance} py-12 md:py-24`}>
        {appearance === 'bg-gray-100' ? (
          <div class='container mx-auto'>
            <Slot></Slot>
          </div>
        ) : (
          <Slot />
        )}
      </section>
      )
    </>
  );
});
