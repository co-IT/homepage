import { component$ } from '@builder.io/qwik';
import { MapIcon } from '../icons';

interface MapProps {
  map: string;
  address1: string;
  address2: string;
  googleMapsLink: string;
}

export const MapCard = component$((props: MapProps) => {
  return (
    <>
      <div class='flex w-full flex-row justify-center'>
        <div class='relative '>
          <a href={props.googleMapsLink} target='_blank'>
            <img src={props.map} alt='map' class='h-64' />
          </a>
          <div class='absolute -left-[16%] -top-[12%] flex flex-col gap-y-7 bg-white px-10 py-9 shadow-xl'>
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

            <div class='flex flex-row gap-x-2 rounded bg-secondary-900 px-4 py-2 text-lg font-semibold leading-5 text-white'>
              <MapIcon />
              <a href={props.googleMapsLink} target='_blank'>
                Zu Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
