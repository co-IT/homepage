import { $, component$ } from '@builder.io/qwik';
import {
  BlueArrowIcon,
  BlueMailIcon,
  BlueMapIcon,
  BluePhoneIcon
} from '../icons';

export const QuickDialButtons = component$(() => {
  const scrollToTopOfThePage = $(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <>
      <div class='fixed right-0 top-2/4 z-30 hidden flex-col gap-y-4 md:flex'>
        <div class='flex flex-col'>
          <a
            href='tel:+49721935163052'
            target='_self'
            class='cursor-pointer rounded-tl-lg bg-primary p-3'
          >
            <BluePhoneIcon />
          </a>
          <a
            href='mailto:info@co-IT.eu'
            target='_blank'
            class='cursor-pointer bg-primary p-3'
          >
            <BlueMailIcon />
          </a>
          <a
            href='https://g.page/communicativeIT?share'
            target='_blank'
            class='cursor-pointer rounded-bl-lg bg-primary p-3'
          >
            <BlueMapIcon />
          </a>
        </div>

        <div
          class='cursor-pointer rounded-tl-lg rounded-bl-lg bg-primary p-2'
          onClick$={() => scrollToTopOfThePage()}
        >
          <BlueArrowIcon />
        </div>
      </div>
    </>
  );
});
