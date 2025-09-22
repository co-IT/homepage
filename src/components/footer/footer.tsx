import { component$ } from '@builder.io/qwik';
import { Link, useDocumentHead } from '@builder.io/qwik-city';
import { Popover } from '@qwik-ui/headless';
import { GithubIcon, MapIcon, YoutubeIcon } from '../icons';
import { Logo } from '../logo/logo';

export const Footer = component$(() => {
  const documentHead = useDocumentHead();

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
    <footer>
      <div class='container relative mt-48 flex w-full flex-col bg-secondary-900 pb-16 pt-12 lg:pb-32'>
        <div class='flex flex-col lg:flex-row'>
          <div class='mb-14 flex w-full justify-center lg:mb-0 lg:mr-24 lg:w-3/12 lg:justify-end'>
            <Logo />
          </div>

          {links.map((link, key) => (
            <Link href={link.path} class='mb-5 w-full text-center lg:mb-0 lg:w-1/12' key={key}>
              <div class='flex flex-col gap-y-2'>
                <div class='text-base font-bold leading-7 text-white'>{link.textFirstLine}</div>
                <div class='text-sm font-semibold leading-6 text-white'>{link.textSecondLine}</div>
              </div>
            </Link>
          ))}

          {documentHead.frontmatter.footer?.attributions?.map(
            (
              attribution: {
                title: string;
                images: { title: string; href: string }[];
              },
              key: number
            ) => (
              <Popover.Root key={key} class='mb-5 w-full text-center font-bold leading-7 text-white lg:mb-0 lg:w-2/12'>
                <Popover.Panel>
                  <ul class='list-item w-60 list-inside space-y-2 rounded-md bg-gray-800 p-4 text-white shadow-md'>
                    {attribution.images.map((image, key) => (
                      <li key={key}>
                        <a href={image.href} class='font-normal hover:underline' target='_blank'>
                          {image.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Popover.Panel>
                <Popover.Trigger>
                  <span>{attribution.title}</span>
                </Popover.Trigger>
              </Popover.Root>
            )
          )}
        </div>

        <div class='right-14 top-40 flex flex-col justify-end gap-y-6 px-16 lg:absolute lg:flex-row lg:gap-x-5 lg:px-0'>
          <div class='flex flex-col gap-y-7 bg-white px-10 py-9 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>co-IT.eu GmbH</div>

            <div class='flex flex-col gap-y-1'>
              <div class='text-lg font-normal leading-5 text-secondary-900'>Eisenbahnstr.15</div>
              <div class='text-lg font-normal leading-5 text-secondary-900'>77855 Achern</div>
            </div>

            <div class='flex flex-row gap-x-2 rounded bg-secondary-900 px-4 py-2 text-lg font-semibold leading-5 text-white'>
              <MapIcon />
              <a href='https://goo.gl/maps/PKdhKoBCgPyFEFsC8' target='_blank'>
                Zu Google Maps
              </a>
            </div>
          </div>

          <div class='flex flex-col gap-y-7 bg-white px-10 py-9 shadow-lg'>
            <div class='text-lg font-bold leading-5 text-secondary-900'>Weitere co-IT Kanäle</div>

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
        <a href='/legal/privacy'>Datenschutz</a>&nbsp;
        <a href='/legal/imprint'>Impressum</a>&nbsp;
        <a href='http://e.co-it.eu/agb' target='_blank'>
          AGB
        </a>
      </div>
    </footer>
  );
});
