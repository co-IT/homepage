import { component$ } from '@builder.io/qwik';
import { CalendarIcon, MailIcon, PhoneIcon } from '../icons';
import { LinkCallToAction } from '../link-call-to-action';

export const ContactPossibilitiesGrid = component$(() => {
  return (
    <>
      <h2 class='mb-14 text-center text-2xl font-bold text-secondary-900 md:mb-28 md:text-4xl'>
        Wir haben Ihr Interesse geweckt?
      </h2>

      <div class='container mx-auto'>
        <div class='flex flex-col gap-y-20 p-4 sm:p-0 md:flex-row md:gap-x-16  '>
          <div class='flex w-full flex-col items-center gap-y-4'>
            <CalendarIcon />

            <div class='text-center text-base font-semibold leading-8 tracking-wider text-black md:text-xl'>
              Reservieren Sie direkt den für Sie passenden Termin bei uns vor
              Ort oder ganz bequem online.
            </div>

            <LinkCallToAction
              href='https://calendly.com/uli-armbruster/videokonferenz-30min'
              target='_blank'
            >
              Termin vereinbaren
            </LinkCallToAction>
          </div>

          <div class='flex w-full flex-col items-center gap-y-7'>
            <PhoneIcon />

            <div class='text-center text-base font-semibold leading-8 tracking-wider text-black md:text-xl'>
              Gerne können Sie auf unserer zentralen Durchwahl anrufen und
              optional eine Nachricht hinterlassen.
            </div>

            <LinkCallToAction href='tel:+49721935163052'>
              Anrufen
            </LinkCallToAction>
          </div>

          <div class='flex w-full flex-col items-center gap-y-7'>
            <MailIcon />

            <div class='text-center text-base font-semibold leading-8 tracking-wider text-black md:text-xl'>
              Natürlich sind wir auch gerne klassisch via E-Mail für Sie da.
            </div>

            <LinkCallToAction href='mailto:angebot@co-IT.eu' target='_blank'>
              Schreiben
            </LinkCallToAction>
          </div>
        </div>
      </div>
    </>
  );
});
