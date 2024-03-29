import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';
import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { Section } from '~/components/section';

export default component$(() => {
  return (
    <>
      <Section>
        <ContentOverlapPortrait
          image={{
            source:
              '/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp',
            alternateText: '2 Developers checking an App on a tablet'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Denken Sie auch in' />
              &nbsp;
              <HeadingSegmentSecondary800 text='ganzheitlichen Lösungen?' />
            </h2>
            <p class='pb-4 leading-7'>
              Dann sind unsere eingespielten Teams aus "High Performern" genau
              das Richtige für Sie. Unser Selbstverständnis geht weit über das
              eines Softwareherstellers oder eines IT-Systemhauses hinaus: Wir
              bieten Ihnen vollumfängliche Lösungen statt punktueller
              Einzelleistungen.
            </p>
            <LinkCallToAction href='/about'>Lösung anfragen</LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </Section>

      {/** TODO: Currently spacing is hard since the *Overlap-Components have content that breaks the DOM-flow
       *         We need to find a way optimizing this in order to not having to handle special cases.
       */}
      <div class='md:mb-48'></div>

      <Section backgroundColor='gray'>
        <VideoOverlapLandscape
          youTubeVideoId='fpPjn58ONrI'
          class='container mx-auto'
        >
          <section class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Machen' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Menschen' />
              &nbsp;
              <HeadingSegmentSecondary text='für Sie auch den' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Unterschied?' />
            </h2>
            <p class='pb-4 leading-7'>
              Dann haben wir für Sie echte Game Changer in unseren Reihen.
              Motiviert durch den Fachkräftemangel, rekrutieren wir mit eigenen
              HR-Spezialisten und qualitätsgetriebenem Auswahlprozess unsere
              Talente. Dank unserer werteorientierten Unternehmenskultur und
              unserer teamzentrierten Lösungsmentalität halten und entwickeln
              wir unsere Mitarbeiter.
            </p>
            <LinkCallToAction href='/quality'>Mehr erfahren</LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Ihre Premiumlösung für Ihre IT-Anforderungen',
  meta: [
    {
      name: 'description',
      content:
        'Herausforderungen in einzigartige Chancen verwandeln! Unsere Expertise in Softwareentwicklung und IT-Service-Management bringt Ihre Idee auf die Straße.'
    },
    {
      name: 'keywords',
      content:
        'co-IT, Premiumlösungen, IT-Anforderungen, Herausforderungen, Softwareentwicklung, IT-Service-Management'
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
          'Nutzen Sie dazu unseren ganzheitlichen Ansatz aus Unternehmensberatung, individueller Softwareentwicklung und vollumfänglichem IT-Service-Management. Damit bringen wir Ihre Ideen auf die Straße.'
      }
    }
  }
};
