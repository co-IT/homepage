import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Section } from '~/components/section';

import {
  ContentOverlapPortrait,
  VideoOverlapLandscape
} from '~/components/content-overlap';

import {
  HeadingSegmentSecondary,
  HeadingSegmentSecondary800
} from '~/components/heading-segment';

import { anwenderVideos, pharmassecFeatures } from './resources';

import { LinkedHeading } from '~/components/link-heading';
import { ProductFeatureList } from '~/components/product-feature-list';

import { YouTubeVideoGrid } from '~/components/youtube';
import { LinkCallToAction } from '../../phishing/components';

import PharmassecLogo from '~/media/gesundheitswesen/pharmassec_logo.png?jsx';

export default component$(() => {
  return (
    <>
      <Section id='cyber-risiken'>
        <ContentOverlapPortrait
          image={{
            source:
              '/img/cyber/cyber-portal/gesundheitswesen/besonderheiten.webp',
            alternateText: '3 Holzklötze die aufeinandergestapelt sind'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#cyber-risiken'>
              <HeadingSegmentSecondary text='Cyber Risiken im' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Gesundheitswesen' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Was ist gesund in der kranken Cyber-Welt? Als unverzichtbarer Teil
              der kritischen Infrastruktur ist der Schutz sensibler Daten gerade
              im Gesundheitswesen eine enorme Herausforderung. Die
              Gesundheitsbranche unterliegt strengen Sicherheitsauflagen: zum
              einen durch die <strong>DSGVO</strong>, die Patientendaten als
              besonders schützenswert erachtet, zum anderen durch Regularien wie
              dem <strong>IT-Sicherheitsgesetz 2.0</strong> und der strengeren{' '}
              <strong>NIS 2 Richtlinie</strong>. Uns ist bewusst, dass es im
              Gesundheitswesen keinen klassischen Büroalltag gibt, umso
              wichtiger ist es hier regelmäßig zu sensibilisieren. Die Zukunft
              Ihrer Patientendaten liegt in Ihrer wachsamen Vorsorge gegen
              potenzielle E-Mail-Bedrohungen - nie war der Schutz Ihrer Daten
              wichtiger.
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='unser_antrieb' backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source:
              '/img/cyber/cyber-portal/gesundheitswesen/unser_antrieb.webp',
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

      <Section id='cyber_portal'>
        <VideoOverlapLandscape youTubeVideoId='_SZyfQB7n7k'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#cyber_portal'>
              <HeadingSegmentSecondary text='Cyber' />{' '}
              <HeadingSegmentSecondary800 text='Portal' />
            </LinkedHeading>
            <p class='leading-7'>
              Bei der Basisfunktion unseres Cyber Portals handelt es sich um
              eine Individuallösung für alle Kunden der Württembergischen
              Versicherung. Die Plattform soll allen Versicherungsnehmern
              gleichermaßen zugutekommen, indem der Fokus auf leicht zu
              bedienende Funktionen, praxisrelevantes Wissen und hochwertige
              Phishing-Simulationen gelegt wird.
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='ihr_cyber-paket' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='4pvfj1ggRlQ'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#ihr_cyber-paket'>
              <HeadingSegmentSecondary text='Ihr' />{' '}
              <HeadingSegmentSecondary800 text='Cyber-Paket' />
            </LinkedHeading>
            <p class='leading-7'>
              Wir haben spezialisierte Szenarien und aktuelle Themen aus dem
              Gesundheitswesen in Form von Phishing-Mails umgesetzt. Somit wird
              Ihren Mitgliedern das perfekte Awareness-Training geboten - gerade
              im Hinblick auf die <strong>NIS 2 Richtlinien</strong>, welche bis
              Mitte 2024 umgesetzt werden sollen und unter anderem regelmäßige
              Schulungen fordern. Unser Gesundheitswesen-Paket bietet Ihnen
              exklusive Vorteile, darunter:
            </p>
            <ul class='list-inside list-disc'>
              <li>Dedizierte Phishing-Simulationen</li>
              <li>
                Maßgeschneiderte Anleitungen für die E-Mail-Systeme Ihrer
                Anwender
              </li>
              <li>Attraktive Preiskonditionen, speziell für Sie</li>
            </ul>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='individuelle_loesung'>
        <div class='grid grid-flow-row justify-center gap-16 sm:grid-flow-col'>
          <div class='mx-auto grid items-start gap-8 rounded-md p-4 shadow-md'>
            <PharmassecLogo />
            <ProductFeatureList features={pharmassecFeatures} />
            <LinkCallToAction
              href='https://e.co-it.eu/cyber/gesundheitswesen/termin-vereinbaren'
              target='_blank'
            >
              Termin vereinbaren
            </LinkCallToAction>
          </div>
          <section class='flex max-w-md flex-col gap-4 px-4'>
            <LinkedHeading href='#individuelle_loesung'>
              <HeadingSegmentSecondary text='Individuelle' />{' '}
              <HeadingSegmentSecondary800 text='Lösung' />
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

      <Section id='ihr-portal' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='YbaUJQYRojE'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#ihr-portal'>
              <HeadingSegmentSecondary text='Ihre Marke,' />{' '}
              <HeadingSegmentSecondary800 text='Ihr Portal' />
            </LinkedHeading>
            <p class='leading-7'>
              Sie möchten für Ihre Kunden einen Schritt weiter gehen,
              nachhaltigen Wert stiften und Antworten auf drängende Fragen
              bieten? Sie wollen, dass Ihr Unternehmen und Ihre Marke als
              modern, digital und sicher wahrgenommen wird? Dann betreiben wir
              für Sie das Cyber Portal - unter Ihrem Namen mit Ihrem
              firmeneigenen Branding und Kunden-spezifischen Inhalten. Nutzen
              Sie die eigene Instanz, um für sich Werbung zu machen, langjährige
              Bestandskunden noch enger zu binden und Ihre Verkäufe mit
              kostenfreien oder rabattierten Zugängen zu steigern. Gerne bauen
              wir Ihnen eine Schnittstelle, um automatisiert Kunden
              freizuschalten.
            </p>

            <LinkCallToAction
              href='https://e.co-it.eu/cyber/gesundheitswesen/termin-vereinbaren'
              target='_blank'
            >
              Termin vereinbaren
            </LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='wichtig_fuer_anwender'>
        <section class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#wichtig_fuer_cyber_verantwortliche'>
            Wichtig für <HeadingSegmentSecondary800 text='Anwender' />
          </LinkedHeading>

          <p class='mx-auto max-w-xl leading-7'>
            Die besten Phishing-Mails helfen nichts, wenn diese nicht den
            Posteingang des Empfängers erreichen. Geben Sie deshalb unseren
            E-Mail-Server und unsere Domains in Ihrer Firewall und in den
            Postfächern frei. Nur dadurch können Sie sicherstellen, dass
            Auswertungen zum Klickverhalten korrekt sind. Damit Sie schnell
            starten können, haben wir für gängige Produkte wie Microsofts
            "Exchange Server" Anleitungsvideos bereitgestellt.
          </p>

          <LinkCallToAction
            href='https://e.co-it.eu/cyberportal-adminkonfiguration'
            target='_blank'
          >
            Freigaberegeln anschauen
          </LinkCallToAction>

          <YouTubeVideoGrid videos={anwenderVideos} />
        </section>
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
