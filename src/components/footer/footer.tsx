import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { GithubIcon, MapIcon, YoutubeIcon } from '../icons';
import { Logo } from '../logo/logo';

export const Footer = component$(() => {
  const links = [
    {
      textFirstLine: 'Lösungen',
      textSecondLine: 'Alles aus einer Hand',
      path: '/solutions'
    },
    {
      textFirstLine: 'Qualität',
      textSecondLine: 'Auf den Punk abgestimmt',
      path: '/quality'
    },
    {
      textFirstLine: 'Karriere',
      textSecondLine: 'Geprägt durch Menschen',
      path: '/career'
    },
    {
      textFirstLine: 'Über uns',
      textSecondLine: 'Motiviert von Werten',
      path: '/about'
    }
  ];

  return (
    <>
      <div class='relative w-full bg-secondary-900 pt-12 pb-16 lg:pb-32 mt-48 container flex flex-col'>
        <div class='flex flex-col lg:flex-row'>
          <div class='w-full lg:w-4/12 flex justify-center mb-14 lg:mb-0 lg:justify-end lg:mr-24'>
            <Logo />
          </div>

          {links.map((link, key) => (
            <Link
              href={link.path}
              class='w-full text-center mb-5 lg:mb-0 lg:w-2/12'
              key={key}
            >
              <div class='flex flex-col gap-y-2'>
                <div class='text-base font-bold text-white leading-7'>
                  {link.textFirstLine}
                </div>
                <div class='text-sm font-semibold text-white leading-6'>
                  {link.textSecondLine}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div class='flex justify-end flex-col gap-y-6 px-16 lg:px-0 lg:flex-row lg:gap-x-5 lg:absolute right-14 top-40'>
          <div class='bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>
              co-IT.eu GmbH
            </div>

            <div class='flex flex-col gap-y-1'>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                Kriegsstr. 39
              </div>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                76133 Karlsruhe
              </div>
            </div>

            <div class='bg-secondary-900 text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2'>
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>

          <div class='bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>
              co-IT.eu GmbH
            </div>

            <div class='flex flex-col gap-y-1'>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                Eisenbahnstr.15
              </div>
              <div class='text-lg font-normal leading-5 text-secondary-900'>
                77855 Achern
              </div>
            </div>

            <div class='bg-secondary-900 text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2'>
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>

          <div class='bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>
              Weitere co-IT Kanäle
            </div>

            <div class='flex flex-row gap-x-7'>
              <YoutubeIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>

      <div class='bg-primary py-5 lg:mt-48 flex justify-center text-xs text-black font-normal'>
        <span>© 2022 - co-IT GmbH -</span>
        <a href='/privacy'>Datenschutz</a>&nbsp;
        <a href='/imprint'>Impressum</a>&nbsp;
        <a href='http://e.co-it.eu/agb' target='_blank'>
          AGB
        </a>
      </div>
    </>
  );
});
