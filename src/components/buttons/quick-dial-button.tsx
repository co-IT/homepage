import { $, component$ } from "@builder.io/qwik";
import { BlueArrowIcon, BlueMailIcon, BluePhoneIcon, BlueMapIcon } from "../icons";

export const QuickDialButton = component$(() => {
  const moveTo = $(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <>
      <div class="flex-col gap-y-4 fixed right-0 top-2/4 hidden md:flex">
        <div class="flex flex-col">
          <a href="tel:+49721935163052" class="bg-primary p-3 rounded-tl-lg cursor-pointer">
            <BluePhoneIcon />
          </a>
          <a href="mailto:info@co-IT.eu" class="bg-primary p-3 cursor-pointer">
            <BlueMailIcon />
          </a>
          <a href="https://g.page/communicativeIT?share" class="bg-primary p-3 rounded-bl-lg cursor-pointer">
            <BlueMapIcon />
          </a>
        </div>

        <div class="bg-primary p-2 rounded-tl-lg rounded-bl-lg cursor-pointer" onClick$={() => moveTo()}>
          <BlueArrowIcon />
        </div>
      </div>
    </>
  )
});
