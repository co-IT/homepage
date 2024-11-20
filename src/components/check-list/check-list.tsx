import { component$ } from '@builder.io/qwik';
import type { CheckListEntry } from './check-list-entry';
import { CheckIcon } from '~/components/icons';

type CheckListProps = {
  entries: CheckListEntry[];
};

export const CheckList = component$((props: CheckListProps) => {
  return (
    <ul class='grid gap-y-2'>
      {props.entries.map((entry, key) => {
        return (
          <li key={key} class='flex gap-2'>
            <CheckIcon></CheckIcon>
            {/* margin-top is a hack since the InfoPopover is 24px height
                  The InfoPopover should have a height of 18px.
                  Currently, we do not know where the extra 8px come from. 
                */}
            <span class={`text-black`}>{entry.text}</span>
          </li>
        );
      })}
    </ul>
  );
});
