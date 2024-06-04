import { component$ } from '@builder.io/qwik';
import { Popover } from '@qwik-ui/headless';
import { InfoIcon } from '../icons';

type InfoPopoverProps = {
  text: string;
};

export const InfoPopover = component$((props: InfoPopoverProps) => {
  return (
    <Popover.Root floating='bottom'>
      <Popover.Panel>
        <div class='w-60 rounded-md bg-gray-800 p-4 text-white shadow-md'>
          {props.text}
        </div>
      </Popover.Panel>
      <Popover.Trigger>
        <InfoIcon />
      </Popover.Trigger>
    </Popover.Root>
  );
});
