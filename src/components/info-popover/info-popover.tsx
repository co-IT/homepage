import { component$ } from '@builder.io/qwik';
import { InfoIcon } from '../icons';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

type InfoPopoverProps = {
  text: string;
};

export const InfoPopover = component$((props: InfoPopoverProps) => {
  return (
    <Popover placement='bottom'>
      <PopoverContent>
        <div class='w-60 rounded-md bg-gray-800 p-4 text-white shadow-md'>
          {props.text}
        </div>
      </PopoverContent>
      <PopoverTrigger>
        <InfoIcon />
      </PopoverTrigger>
    </Popover>
  );
});
