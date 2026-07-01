import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { YellowRightArrowIcon } from '../icons';

export const ContentSwitch = component$(() => {
  const links = [
    {
      textFirstLine: 'Leistungen',
      textSecondLine: 'IT, Sicherheit und Software',
      path: '/leistungen',
      image: '/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp',
      alt: 'Team bespricht IT-Leistungen an einem Tablet'
    },
    {
      textFirstLine: 'Produkte & Lösungen',
      textSecondLine: 'Digitale Lösungen für den Mittelstand',
      path: '/produkte-loesungen',
      image: '/img/cyber/cyber-portal/header.webp',
      alt: 'Cyber-Awareness-Portal auf einem Bildschirm'
    },
    {
      textFirstLine: 'Branchen',
      textSecondLine: 'IT im richtigen Kontext',
      path: '/branchen',
      image: '/img/about/team-reviewing-a-solution.webp',
      alt: 'Team prüft eine Lösung gemeinsam am Arbeitsplatz'
    },
    {
      textFirstLine: 'Über uns',
      textSecondLine: 'Pragmatischer Technologiepartner',
      path: '/ueber-uns',
      image: '/img/content-switch/about.webp',
      alt: 'co-IT Team'
    }
  ];

  return (
    <>
      <h2 class='mb-4 text-center text-xl font-bold md:mb-28 md:text-4xl'>
        Das könnte Sie auch interessieren
      </h2>
      <div class='flex flex-col gap-y-0 lg:gap-y-14'>
        {links.map((link, key) => (
          <Link
            href={link.path}
            key={key}
            class={`z-0 flex flex-row ${key % 2 !== 0 ? 'justify-end' : ''}`}
          >
            <div class='relative lg:w-6/12 '>
              <div class='bg-secondary-900'>
                <img
                  src={link.image}
                  width='608'
                  height='300'
                  loading='lazy'
                  alt={link.alt}
                  class='hidden h-72 w-full object-cover opacity-50 md:block'
                />
              </div>
              <div
                class={`${
                  key % 2 === 0 ? 'lg:left-[70%]' : 'lg:right-[70%]'
                } mb-5 flex w-full justify-between bg-white  p-6 text-base font-bold leading-7 shadow-2xl lg:absolute lg:top-[30%] lg:p-10 lg:text-2xl 
                `}
              >
                <div class='my-auto'>
                  {link.textFirstLine} |{' '}
                  <span class='font-semibold'>{link.textSecondLine}</span>
                </div>
                <div class='pl-3 md:pl-0'>
                  <YellowRightArrowIcon />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
});
