import { component$ } from '@builder.io/qwik';
import { MapIcon } from '../icons';

interface MapProps {
  map: string
  address1: string
  address2: string
}

export const MapCard = component$((props: MapProps) => {
  return (
    <>
      <div class='w-full flex flex-row justify-end'>
        <div class="relative w-5/6 bg-primary h-64">
          <img src={props.map} alt="map" class="w-full h-64 object-full" />
          <div class='absolute bg-white px-10 py-9 flex flex-col gap-y-7 shadow-xl -left-[16%] -top-[12%]'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>
              co-IT.eu GmbH
            </div>

            <div class='flex flex-col gap-y-1'>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                {props.address1}
              </div>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                {props.address2}
              </div>
            </div>

            <div class='bg-secondary-900 text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2'>
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
