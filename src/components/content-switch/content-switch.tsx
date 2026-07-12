import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { YellowRightArrowIcon } from '../icons';

export const ContentSwitch = component$(() => {
  const links = [
    {
      textFirstLine: 'Leistungen',
      textSecondLine: 'IT, Sicherheit und Software',
      path: '/leistungen',
      image: '/img/article-pages/server-rack-technology-review.webp',
      alt: 'IT-Techniker dokumentiert technische Systeme direkt an einem Serverschrank.'
    },
    {
      textFirstLine: 'Produkte & Lösungen',
      textSecondLine: 'Digitale Lösungen für den Mittelstand',
      path: '/produkte-loesungen',
      image: '/img/article-pages/product-solutions-workshop.webp',
      alt: 'Team bespricht digitale Lösungen an einem Besprechungstisch mit Laptops.'
    },
    {
      textFirstLine: 'Branchen',
      textSecondLine: 'IT im richtigen Kontext',
      path: '/branchen',
      image: '/img/article-pages/technology-stack-review.webp',
      alt: 'Berater und Kunde prüfen eine technische Systemarchitektur an einem großen Bildschirm.'
    },
    {
      textFirstLine: 'Über uns',
      textSecondLine: 'Pragmatischer Technologiepartner',
      path: '/ueber-uns',
      image: '/img/article-pages/company-team-laptop-planning.webp',
      alt: 'co-IT-Team plant eine kundenspezifische IT-Lösung an Laptops.'
    }
  ];

  return (
    <>
      <h2 class='mb-4 text-center text-xl font-bold md:mb-28 md:text-4xl'>Das könnte Sie auch interessieren</h2>
      <div class='flex flex-col gap-y-0 lg:gap-y-14'>
        {links.map((link, key) => (
          <Link href={link.path} key={key} class={`z-0 flex flex-row ${key % 2 !== 0 ? 'justify-end' : ''}`}>
            <div class='relative lg:w-6/12'>
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
                } mb-5 flex w-full justify-between bg-white p-6 text-base font-bold leading-7 shadow-2xl lg:absolute lg:top-[30%] lg:p-10 lg:text-2xl`}
              >
                <div class='my-auto'>
                  {link.textFirstLine} | <span class='font-semibold'>{link.textSecondLine}</span>
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
