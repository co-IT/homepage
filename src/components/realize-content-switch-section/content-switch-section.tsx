import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { YellowRightArrowIcon } from '../icons';

export const ContentSwitch = component$(() => {
  const links = [
    {
      textFirstLine: 'Lösungen',
      textSecondLine: 'Alles aus einer Hand',
      path: '/solutions',
      image: '/img/content-switch/solutions.avif'
    },
    {
      textFirstLine: 'Qualität',
      textSecondLine: 'Auf den Punk abgestimmt',
      path: '/quality',
      image: '/img/content-switch/quality.avif'
    },
    {
      textFirstLine: 'Karriere',
      textSecondLine: 'Geprägt durch Menschen',
      path: '/career',
      image: '/img/content-switch/career.avif'
    },
    {
      textFirstLine: 'Über uns',
      textSecondLine: 'Motiviert von Werten',
      path: '/about',
      image: '/img/content-switch/about.avif'
    }
  ];

  return (
    <div class="flex flex-col gap-y-0 lg:gap-y-14 container mx-auto">
      {links.map((link, key) => (
        <Link
          href={link.path}
          key={key}
          class={
            key % 2 === 0
              ? 'flex flex-row justify-start z-0'
              : 'flex flex-row justify-end z-0'
          }
        >
          <div class="w-full lg:w-6/12 relative bg-secondary">
            <img
              src={link.image}
              loading="lazy"
              alt="content"
              class="h-72 w-full opacity-50 object-cover hidden lg:block"
            />

            <div
              class={
                key % 2 === 0
                  ? 'bg-white p-6 lg:p-10 lg:absolute lg:top-[30%] lg:left-[70%] w-full shadow-2xl text-base lg:text-2xl font-bold leading-7 flex justify-between'
                  : 'bg-white p-6 lg:p-10 lg:absolute lg:top-[30%] lg:right-[70%] w-full shadow-2xl text-base lg:text-2xl font-bold leading-7 flex justify-between'
              }
            >
              <div class="my-auto">
                {link.textFirstLine} |{' '}
                <span class="font-semibold">{link.textSecondLine}</span>
              </div>

              <div>
                <YellowRightArrowIcon />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
});
