import { component$ } from '@builder.io/qwik';

import { Section } from '~/components/section';

import {
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';

import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';

import { wuerttembergischeFeatures } from './resources';

import type { DocumentHead } from '@builder.io/qwik-city';
import { LinkedHeading } from '~/components/link-heading';
import { ProductFeatureList } from '~/components/product-feature-list';

import PharmassecLogo from '~/media/gesundheitswesen/pharmassec_logo.png?jsx';

export default component$(() => {
  return (
    <>
      <Section id='besonderheiten'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/gesundheitswesen/Antrieb.webp',
            alternateText: 'Besonderheiten im Gesundheitswesen'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#besonderheiten'>
              <HeadingSegmentSecondary text='Besunderheiten im' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Gesundheitswesen' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Was ist gesund in die kranke Cyber-Welt? Als unverzichtbarer Teil
              der kritischen Infrastruktur ist der Schutz sensibler Daten gerade
              im Gesundheitswesen eine enorme Herausforderung. Die
              Gesundheitsbranche unterliegt strengen Sicherheitsauflagen: zum
              einen durch die DSGVO, zum anderen durch Regularien wie dem
              IT-Sicherheitsgesetz 2.0. Uns ist bewusst, dass es im
              Gesundheitswesen keinen klassischen Büroalltag gibt, umso
              wichtiger ist es hier regelmäßig zu sensibilisieren.
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='unser_antrieb' backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/gesundheitswesen/Antrieb.webp',
            alternateText: 'Unser Antrieb'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#unser_antrieb'>
              <HeadingSegmentSecondary text='Unser' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Antrieb' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Wir wollen allen die fachliche Kompetenz, die praktischen
              Fähigkeiten und das notwendige Wissen vermitteln, um sich in der
              digitalen Welt sicher zu fühlen und sicher zu sein. Das Cyber
              Portal bietet Ihnen und Ihren Anwendern einen Raum, um
              nachhaltiges Praxiswissen auf verständliche Weise zu erlernen,
              dieses mit intensiven Prüfungen und realistischen Simulationen zu
              festigen und dabei Lernfortschritte systematisch sicherzustellen.
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='kostenfreie_basisversion'>
        <VideoOverlapLandscape youTubeVideoId='_SZyfQB7n7k'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#kostenfreie_basisversion'>
              <HeadingSegmentSecondary text='Kostenfreie' />{' '}
              <HeadingSegmentSecondary800 text='Basisversion' />
            </LinkedHeading>
            <p class='leading-7'>
              Beim Cyber Portal handelt es sich um eine Individuallösung für
              alle Kunden der Württembergischen Versicherung. Die Plattform soll
              allen Versicherungsnehmern gleichermaßen zugutekommen, indem der
              Fokus auf leicht zu bedienende Funktionen, praxisrelevantes Wissen
              und hochwertige Phishing-Simulationen gelegt wird. Dabei stellt
              die Württembergische als alleiniger Auftraggeber sicher, dass die
              Basisversion kostenfrei weiterentwickelt und sicher betrieben
              wird.
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='ihr_cyber-paket' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='4pvfj1ggRlQ'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#kostenfreie_basisversion'>
              <HeadingSegmentSecondary text='Ihr' />{' '}
              <HeadingSegmentSecondary800 text='Cyber-Paket' />
            </LinkedHeading>
            <p class='leading-7'>
              Eigene Inhalte, Eigene Domains, Individuelle Hilfestellung
              (Anleitungsvideos Spamfilter)
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='ihr_portal'>
        <div class='grid grid-flow-row justify-center gap-16 sm:grid-flow-col'>
          {/* Wuerttembergische Basispaket Features */}
          <div class='mx-auto grid items-start gap-8 rounded-md p-4 shadow-md'>
            <PharmassecLogo />
            <ProductFeatureList features={wuerttembergischeFeatures} />
            <a
              href='https://wuerttembergische.co-IT.eu'
              target='_blank'
              class='rounded-[3.5rem] bg-[#f84914] p-4 text-center text-white transition-colors hover:bg-[#d33e11]'
            >
              Zum Cyber Portal
            </a>
          </div>
          {/* Wuerttembergische Basispaket Teaser */}
          <section class='flex max-w-md flex-col gap-4 px-4'>
            <LinkedHeading href='#individuelle_loesung'>
              <HeadingSegmentSecondary text='Ihre Marke,' />{' '}
              <HeadingSegmentSecondary800 text='Ihr Portal' />
            </LinkedHeading>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
              Für das Gesundheitswesen haben wir ein Paket geschnürrt, welches
              Ihnen die folgende Vorteile bietet: - Dedizierte
              Phishing-Simulationen mit eigenen Domains wie ratiopharm-info.de -
              Von Ihnen vorgegebene - Anleitungen speziell für E-Mail-Systeme
              Ihrer Anwender - Besonders günstiger Preis
            </p>
          </section>
        </div>
      </Section>

      <Section id='white-label' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='YbaUJQYRojE'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#kostenfreie_basisversion'>
              <HeadingSegmentSecondary text='White' />
              <HeadingSegmentSecondary800 text='-Label' />
            </LinkedHeading>
            <p class='leading-7'>----</p>
          </section>
        </VideoOverlapLandscape>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Cyber Portal fürs Gesundheitswesen',

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/cyber/cyber-portal/gesundheitswesen/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Cyber Portal',
        headingAccent: 'Rezeptur für nachhaltige Sicherheit.'
      }
    }
  }
};
