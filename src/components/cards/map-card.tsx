import { component$ } from "@builder.io/qwik";
import { MapIcon } from "../icons";

export const MapCard = component$(() => {
  return (
    <>
      <div class="w-full flex flex-row justify-end">
        <div class="w-5/6 bg-primary h-64 relative">
          <div class="absolute bg-white px-10 py-9 flex flex-col gap-y-7 shadow-xl -left-[16%] -top-[12%]">
            <div class="text-lg font-bold leading-5 text-secondary">
              co-IT.eu GmbH
            </div>

            <div class="flex flex-col gap-y-1">
              <div class="text-lg font-normal leading-5 text-secondary">
                Kriegsstr. 39
              </div>
              <div class="text-lg font-normal leading-5 text-secondary">
                76133 Karlsruhe
              </div>
            </div>

            <div class="bg-secondary text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2">
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});