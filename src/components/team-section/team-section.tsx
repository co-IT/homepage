import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';
export const TeamSection = component$(() => {
  return (
    <div class='relative flex flex-col '>
      <div class='absolute left-0 right-0 top-10 z-10'>
        <div class='leading-1 mx-auto max-w-5xl px-4 text-center font-normal text-white sm:text-base md:px-14 md:text-2xl lg:leading-10'>
          "Unsere Motivation ist es eine <span class='font-semibold text-primary'>aufgeschlossene Welt</span> zu
          schaffen, in der jeder <span class='font-semibold text-primary'>mutig und zuversichtlich</span> seine
          Herausforderungen meistert. Deshalb versprechen wir{' '}
          <span class='font-semibold text-primary'>Veränderungen zu etwas Positivem</span> zu machen, damit jeder{' '}
          <span class='font-semibold text-primary'>Herausforderungen als Chance</span> wahrnimmt,{' '}
          <span class='font-semibold text-primary'>aktiv mitgestaltet</span>, immer wieder{' '}
          <span class='font-semibold text-primary'>neue Wege beschreitet</span> und notwendige{' '}
          <span class='font-semibold text-primary'>Risiken mutig eingeht</span>
          ."
        </div>

        <div class='my-12 flex justify-center'>
          <LinkCallToAction href='http://karriere.co-it.eu/' target='_blank'>
            Jetzt bewerben
          </LinkCallToAction>
        </div>
      </div>
      <div class='mx-auto max-w-[1920px] bg-secondary-900'>
        <img
          class='min-h-[350px]'
          loading='lazy'
          src='/img/about/team.webp'
          width='1920'
          height='601'
          alt='Picture showing the whole team at co-IT'
          style='mask-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)); object-fit: cover;'
        />
      </div>
    </div>
  );
});
