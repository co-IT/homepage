import { component$ } from '@builder.io/qwik';
import { CalendarIcon, MailIcon, PhoneIcon } from '../icons';
import { LinkCallToAction } from '../link-call-to-action';

export const ContactPossibilitiesGrid = component$(() => {
  return (
    <>
      <h2 class='text-secondary-900 text-center mb-14 md:mb-28 text-2xl md:text-4xl font-bold'>
        Wir haben Ihr Interesse geweckt?
      </h2>

      <div class='container mx-auto '>
        <div class='flex flex-col gap-y-20 md:flex-row md:gap-x-16  '>
          <div class='w-full flex flex-col gap-y-4 items-center'>
            <CalendarIcon />

            <div class='text-base md:text-xl text-black font-semibold leading-8 text-center tracking-wider'>
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

          <div class='w-full flex flex-col gap-y-7 items-center'>
            <PhoneIcon />

            <div class='text-base md:text-xl text-black font-semibold leading-8 text-center tracking-wider'>
              Gerne können Sie auf unserer zentralen Durchwahl anrufen und
              optional eine Nachricht hinterlassen.
            </div>

            <LinkCallToAction href='tel:+49721935163052'>
              Anrufen
            </LinkCallToAction>
          </div>

          <div class='w-full flex flex-col gap-y-7 items-center'>
            <MailIcon />

            <div class='text-base md:text-xl text-black font-semibold leading-8 text-center tracking-wider'>
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
