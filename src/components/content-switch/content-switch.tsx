import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { YellowRightArrowIcon } from '../icons';

export const ContentSwitch = component$(() => {
  const links = [
    {
      textFirstLine: 'Lösungen',
      textSecondLine: 'Alles aus einer Hand',
      path: '/solutions',
      image: '/img/content-switch/solutions.webp'
    },
    {
      textFirstLine: 'Qualität',
      textSecondLine: 'Auf den Punk abgestimmt',
      path: '/quality',
      image: '/img/content-switch/quality.webp'
    },
    {
      textFirstLine: 'Karriere',
      textSecondLine: 'Geprägt durch Menschen',
      path: '/career',
      image: '/img/content-switch/career.webp'
    },
    {
      textFirstLine: 'Über uns',
      textSecondLine: 'Motiviert von Werten',
      path: '/about',
      image: '/img/content-switch/about.webp'
    }
  ];

  return (
    <>
      <h2 class='font-bold text-xl md:text-4xl mb-4 md:mb-28 text-center'>
        Das könnte Sie auch interessieren
      </h2>
      <div class='flex flex-col gap-y-0 lg:gap-y-14'>
        {links.map((link, key) => (
          <Link
            href={link.path}
            key={key}
            class={`z-0 flex flex-row ${key % 2 !== 0 ? 'justify-end' : ''}`}
          >
            <div class='lg:w-6/12 relative '>
              <div class='bg-secondary-900'>
                <img
                  src={link.image}
                  loading='lazy'
                  alt='content'
                  class='h-72 w-full opacity-50 object-cover hidden md:block'
                />
              </div>
              <div
                class={`${
                  key % 2 === 0 ? 'lg:left-[70%]' : 'lg:right-[70%]'
                } bg-white p-6 lg:p-10 lg:absolute lg:top-[30%]  w-full mb-5 shadow-2xl text-base lg:text-2xl font-bold leading-7 flex justify-between 
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
