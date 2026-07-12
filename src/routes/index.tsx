import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContentOverlapPortrait, VideoOverlapLandscape } from '~/components/content-overlap';
import { HeadingSegmentSecondary, HeadingSegmentSecondary800 } from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { Section } from '~/components/section';

export default component$(() => {
  return (
    <>
      <Section>
        <ContentOverlapPortrait
          image={{
            source: '/img/landing-page/developers-reviewing-an-app-on-the-tablet.webp',
            alternateText: '2 Developers checking an App on a tablet'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Auf den' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Punkt.' />
              &nbsp;
              <HeadingSegmentSecondary text='Aber nicht nur' />
              &nbsp;
              <HeadingSegmentSecondary800 text='punktuell.' />
            </h2>
            <p class='pb-4 leading-7'>
              Wir unterstützen Unternehmen dort, wo IT im Alltag Wirkung zeigen muss: im stabilen Betrieb, bei sicheren
              Systemen und bei digitalen Vorhaben, die nicht nur technisch funktionieren, sondern zum Unternehmen
              passen. Dabei betrachten wir nicht nur einzelne Aufgaben, sondern auch die Zusammenhänge dahinter –
              persönlich vom ersten Handschlag an und verlässlich in der langfristigen Betreuung.
            </p>
            <LinkCallToAction href='/leistungen'>Leistungen ansehen</LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </Section>

      {/** TODO: Currently spacing is hard since the *Overlap-Components have content that breaks the DOM-flow
       *         We need to find a way optimizing this in order to not having to handle special cases.
       */}
      <div class='md:mb-48'></div>

      <Section backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='QVArEtvAGsk' class='container mx-auto'>
          <section class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Eine Idee auf die' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Straße gebracht' />
            </h2>
            <p class='pb-4 leading-7'>
              Wie arbeitet die Werkstatt von morgen? Bei unserem Partner, der Werbas GmbH, durften wir unsere
              Lösungskompetenz entlang der gesamten Wertschöpfungskette einbringen: von der Prozessanalyse bis zur
              individuellen Softwareentwicklung. Heraus kam das neue Werkstattmanagementsystem Werkstatt.NXT.
            </p>
            <LinkCallToAction href='/produkte-loesungen'>Mehr zu Produkten & Lösungen</LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <div class='md:mb-48'></div>

      <Section>
        <ContentOverlapPortrait
          image={{
            source: '/img/article-pages/mittelstand-it-consulting.webp',
            alternateText: 'IT-Berater trifft einen regionalen Kunden in einem Unternehmensbüro.'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='IT, die zu Ihrer' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Branche passt.' />
            </h2>
            <p class='pb-4 leading-7'>
              Ob Handwerk, Gesundheitswesen, Großhandel, Versicherung, Lohnfertigung oder Dienstleistung: Gute IT
              beginnt mit Verständnis für Abläufe, Risiken und Prioritäten. Deshalb betrachten wir Technik immer im
              Kontext Ihrer Branche und nicht nur als einzelne Maßnahme.
            </p>
            <LinkCallToAction href='/branchen'>Branchen ansehen</LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
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
      content: 'co-IT, Premiumlösungen, IT-Anforderungen, Herausforderungen, Softwareentwicklung, IT-Service-Management'
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
