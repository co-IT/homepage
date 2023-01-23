import { component$ } from '@builder.io/qwik';
import { GithubIcon, MapIcon, YoutubeIcon } from '../icons';

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
      <div class="relative w-full bg-secondary pt-12 pb-32 mt-48 container flex flex-col">
        <div class="flex flex-row">
          <div class="w-4/12 flex justify-end mr-24">
            <img
              width="173"
              height="69"
              src="/img/logo.svg"
              alt="co-IT.eu orange Logo - Inspire to Change"
            />
          </div>

          {links.map(link => (
            <a href={link.path} class="w-2/12">
              <div class="flex flex-col gap-y-2">
                <div class="text-base font-bold text-white leading-7">
                  {link.textFirstLine}
                </div>
                <div class="text-sm font-semibold text-white leading-6">
                  {link.textSecondLine}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div class="flex justify-end flex-row gap-x-5 absolute right-14 top-40">
          <div class="bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg">
            <div class="text-lg font-bold leading-5 text-secondary">
              co-IT.eu GmbH
            </div>

            <div class="flex flex-col gap-y-1">
              <div class="text-lg font-normal leading-5 text-secondary">
                Kriegsstr. 39
              </div>
              <div class="text-lg font-normal leading-5 text-secondary">
                76133 Karlsruhe
              </div>
            </div>

            <div class="bg-secondary text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2">
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>

          <div class="bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg">
            <div class="text-lg font-bold leading-5 text-secondary">
              co-IT.eu GmbH
            </div>

            <div class="flex flex-col gap-y-1">
              <div class="text-lg font-normal leading-5 text-secondary">
                Eisenbahnstr.15
              </div>
              <div class="text-lg font-normal leading-5 text-secondary">
                77855 Achern
              </div>
            </div>

            <div class="bg-secondary text-lg font-semibold leading-5 text-white px-4 py-2 rounded flex flex-row gap-x-2">
              <MapIcon />
              <span>Zu Google Maps</span>
            </div>
          </div>

          <div class="bg-white px-10 py-9 flex flex-col gap-y-7 shadow-lg">
            <div class="text-lg font-bold leading-5 text-secondary">
              Weitere co-IT Kanäle
            </div>

            <div class="flex flex-row gap-x-7">
              <YoutubeIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-primary py-5 mt-48 flex justify-center">
        <span class="text-xs text-black font-normal opacity-40">
          © 2022 - co-IT GmbH - Datenschutz Impressum AGB
        </span>
      </div>
    </>
  );
});
