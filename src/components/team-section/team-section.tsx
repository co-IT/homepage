import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';

export const TeamSection = component$(() => {
  return (
    <div class='flex flex-col'>
      <div class='mx-auto max-w-5xl px-8 text-center text-2xl font-normal leading-10 text-black lg:text-3xl'>
        "Unsere Motivation ist es eine{' '}
        <span class='font-semibold text-secondary-900'>
          aufgeschlossene Welt
        </span>{' '}
        zu schaffen, in der jeder{' '}
        <span class='font-semibold text-secondary-900'>
          mutig und zuversichtlich
        </span>{' '}
        seine Herausforderungen meistert. Deshalb versprechen wir{' '}
        <span class='font-semibold text-secondary-900'>
          Veränderungen zu etwas Positivem
        </span>{' '}
        zu machen, damit jeder{' '}
        <span class='font-semibold text-secondary-900'>
          Herausforderungen als Chance
        </span>{' '}
        wahrnimmt,{' '}
        <span class='font-semibold text-secondary-900'>aktiv mitgestaltet</span>
        , immer wieder{' '}
        <span class='font-semibold text-secondary-900'>
          neue Wege beschreitet
        </span>{' '}
        und notwendige{' '}
        <span class='font-semibold text-secondary-900'>
          Risiken mutig eingeht
        </span>
        ."
      </div>

      <div class='my-12 flex justify-center'>
        <LinkCallToAction href='http://karriere.co-it.eu/' target='_blank'>
          Jetzt bewerben
        </LinkCallToAction>
      </div>

      <img
        class='mx-auto'
        loading='lazy'
        src='/img/about/team.webp'
        alt='Picture showing the whole team at co-IT'
      />
    </div>
  );
});
