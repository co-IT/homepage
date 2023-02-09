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
                  loading='lazy'
                  alt='content'
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
