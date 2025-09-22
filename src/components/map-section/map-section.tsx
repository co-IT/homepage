import { component$ } from '@builder.io/qwik';
import { MapCard } from '../cards';

export const MapSection = component$(() => {
  const mapItems = [
    {
      map: '/img/contact/google-maps-achern-office.webp',
      address1: 'Eisenbahnstr.15',
      address2: '77855 Achern',
      googleMapsLink: 'https://goo.gl/maps/PKdhKoBCgPyFEFsC8'
    }
  ];
  return (
    <>
      <div class='container mx-auto'>
        <div class='flex flex-col gap-y-16'>
          {mapItems.map((item, key) => (
            <MapCard
              map={item.map}
              address1={item.address1}
              address2={item.address2}
              googleMapsLink={item.googleMapsLink}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
});
