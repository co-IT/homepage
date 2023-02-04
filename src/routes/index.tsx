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
            source: '/img/landing-page/developers-tablet.avif',
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
              Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege
              und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist
              es Veränderungen zu etwas Positivem zu machen.
            </p>
            <LinkCallToAction href='/about'>Mehr erfahren</LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </SectionArea>

      <SectionArea backgroundColor='gray'>
        <ContentOverlapLandscape
          image={{
            source: '/img/landing-page/cooking-session.avif',
            alternateText: 'Our team cooking a delicious meal'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
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
        </ContentOverlapLandscape>
      </SectionArea>

      {/** TODO: Currently spacing is hard since the *Overlap-Components have content that breaks the DOM-flow
       *         We need to find a way optimizing this in order to not having to handle special cases.
       */}
      <div class='mb-28'></div>

      <VideoOverlapLandscape youTubeVideoId='fpPjn58ONrI'>
        <section class='flex flex-col space-y-4'>
          <h2 class='font-bold text-xl md:text-4xl'>
            <HeadingSegmentSecondary text='Wir geben dir Halt' />
          </h2>
          <p class='leading-7'>
            Beschäftigung kommt von beschäftigt - und das ist zweifelslos jeder.
            Beruf kommt hingegen von Berufung und eine Berufung kann dir so viel
            mehr bieten: Gleichgesinnte statt Arbeitskollegen, Weiterentwicklung
            statt Komfortzone, Rückhalt statt Wegducken. Wir verstehen
            Arbeitszeit als Lebenszeit, die wir nutzen wollen, um Reibung und
            Bewegung zu erzeugen. Wirf einen Blick in unsere Kurzvorstellung und
            nimm dir eine Minute für unser Video oben. Sprechen dich unsere
            Ideen an? Dann kannst du am Ende der Seite deine Bewerbung starten,
            indem du unseren Cultural Fit Fragebogen anforderst.
          </p>
          <LinkCallToAction
            href='https://e.co-it.eu/recruiting/kurzvorstellung'
            target='_blank'
          >
            Kurzvorstellung herunterladen
          </LinkCallToAction>
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
          source: '/img/landing-page/header.avif',
          alt: 'Two men writing on a flip chart'
        },
        headingSegments: [
          { type: 'white', text: 'Sie wollen' },
          { type: 'accent', text: 'Herausforderungen als Chancen' },
          { type: 'white', text: 'nutzen?' }
        ],
        teaser:
          'Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist es Veränderungen zu etwas Positivem zu machen.'
      }
    }
  }
};
