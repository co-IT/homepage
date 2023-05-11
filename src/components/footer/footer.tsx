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
      textSecondLine: 'Auf den Punkt abgestimmt',
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
      <div class='container relative mt-48 flex w-full flex-col bg-secondary-900 pt-12 pb-16 lg:pb-32'>
        <div class='flex flex-col lg:flex-row'>
          <div class='mb-14 flex w-full justify-center lg:mb-0 lg:mr-24 lg:w-4/12 lg:justify-end'>
            <Logo />
          </div>

          {links.map((link, key) => (
            <Link
              href={link.path}
              class='mb-5 w-full text-center lg:mb-0 lg:w-2/12'
              key={key}
            >
              <div class='flex flex-col gap-y-2'>
                <div class='text-base font-bold leading-7 text-white'>
                  {link.textFirstLine}
                </div>
                <div class='text-sm font-semibold leading-6 text-white'>
                  {link.textSecondLine}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div class='right-14 top-40 flex flex-col justify-end gap-y-6 px-16 lg:absolute lg:flex-row lg:gap-x-5 lg:px-0'>
          <div class='flex flex-col gap-y-7 bg-white px-10 py-9 shadow-lg'>
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

            <div class='flex flex-row gap-x-2 rounded bg-secondary-900 px-4 py-2 text-lg font-semibold leading-5 text-white'>
              <MapIcon />
              <a href='https://g.page/communicativeIT?share' target='_blank'>
                Zu Google Maps
              </a>
            </div>
          </div>

          <div class='flex flex-col gap-y-7 bg-white px-10 py-9 shadow-lg'>
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

            <div class='flex flex-row gap-x-2 rounded bg-secondary-900 px-4 py-2 text-lg font-semibold leading-5 text-white'>
              <MapIcon />
              <a href='https://goo.gl/maps/PKdhKoBCgPyFEFsC8' target='_blank'>
                Zu Google Maps
              </a>
            </div>
          </div>

          <div class='flex flex-col gap-y-7 bg-white px-10 py-9 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>
              Weitere co-IT Kanäle
            </div>

            <div class='flex flex-row gap-x-7'>
              <a href='http://e.co-it.eu/youtube' target='_blank'>
                <YoutubeIcon />
              </a>
              <a href='http://e.co-it.eu/github' target='_blank'>
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class='flex justify-center bg-primary py-5 text-xs font-normal text-black lg:mt-48'>
        <span>© 2023 - co-IT GmbH -</span>
        <a href='/legal/privacy'>Datenschutz</a>&nbsp;
        <a href='/legal/imprint'>Impressum</a>&nbsp;
        <a href='http://e.co-it.eu/agb' target='_blank'>
          AGB
        </a>
      </div>
    </>
  );
});
