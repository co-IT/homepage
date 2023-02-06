import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  ContentOverlapLandscape,
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';
import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { SectionArea } from '~/components/section-area';

export default component$(() => {
  return (
    <>
      <SectionArea>
        <ContentOverlapPortrait
          image={{
            source: '/img/landing-page/developers-tablet.webp',
            alternateText: '2 Developers checking an App on a tablet'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='font-bold text-xl md:text-4xl'>
              <HeadingSegmentSecondary text='Denken Sie auch in' />
              &nbsp;
              <HeadingSegmentSecondary800 text='ganzheitlichen Lösungen?' />
            </h2>
            <p class='leading-7 pb-4'>
              Dann sind unsere eingespielten Teams aus High Performern genau das Richtige für Sie
              Unser Selbstverständnis geht weit über das eines Softwareherstellers oder eines IT-Systemhauses hinaus:
              Wir bieten Ihnen vollumfängliche Lösungen statt punktueller Einzelleistungen.
            </p>
            <LinkCallToAction href='/about'>Lösung anfragen</LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </SectionArea>

      {/** TODO: Currently spacing is hard since the *Overlap-Components have content that breaks the DOM-flow
       *         We need to find a way optimizing this in order to not having to handle special cases.
       */}
      <div class='mb-48'></div>

      <VideoOverlapLandscape youTubeVideoId='fpPjn58ONrI'>
        <section class='flex flex-col space-y-4'>
            <h2 class='font-bold text-xl md:text-4xl'>
              <HeadingSegmentSecondary text='Machen' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Menschen' />
              &nbsp;
              <HeadingSegmentSecondary text='für Sie auch den' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Unterschied?' />
            </h2>
            <p class='leading-7 pb-4'>
              Dann haben wir für Sie echte Game Changer in unseren Reihen.
              Motiviert durch den Fachkräftemangel, rekrutieren wir mit eigenen
              HR-Spezialisten und qualitätsgetriebenem Auswahlprozess unsere
              Talente. Dank unserer Werteorientierten Unternehmenskultur und
              unserer Team-zentrierten Lösungsmentalität halten und entwickeln
              wir unsere Mitarbeiter.
            </p>
            <LinkCallToAction href='/quality'>Mehr erfahren</LinkCallToAction>
          </section>
      </VideoOverlapLandscape>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ],
  frontmatter: {
    header: {
      type: 'landing-page',
      configuration: {
        backgroundImage: {
          source: '/img/landing-page/header.webp',
          alt: 'Two men writing on a flip chart'
        },
        headingSegments: [
          { type: 'white', text: 'Sie wollen' },
          { type: 'accent', text: 'Herausforderungen als Chancen' },
          { type: 'white', text: 'nutzen?' }
        ],
        teaser:
          'Nutzen Sie dazu unseren ganzheitlichen Ansatz aus Unternehmensberatung, individueller Softwareentwicklung und vollumfänglichen IT-Service-Management. Damit bringen wir Ihre Ideen auf die Straße.'
      }
    }
  }
};
