import { component$, Slot } from '@builder.io/qwik';
import { LightbulbIcon } from '~/components/icons';

export const HintCard = component$(() => {
  return (
    <div class='mx-auto flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-md'>
      <div class='flex items-center gap-2'>
        <LightbulbIcon></LightbulbIcon>
        <span class='text-lg font-bold'>Gut zu wissen</span>
      </div>
      <Slot />
    </div>
  );
});
