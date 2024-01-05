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
import { LinkCallToAction } from '~/components/link-call-to-action';

import { YouTubeVideoGrid } from '~/components/youtube';

import {
  cyberVerantwortlicheVideos,
  wuerttembergischeFeatures
} from './resources';

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
            <LinkedHeading href='#unser_antrieb'>
              <HeadingSegmentSecondary text='Besunderheiten im' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Gesundheitswesen' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Kritische Infrastruktur, Besonders sensible Daten, Kein
              klassisches Büro.
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

      <Section id='ihr_plus_an_sicherheit'>
        <VideoOverlapLandscape youTubeVideoId='4pvfj1ggRlQ'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#ihr_plus_an_sicherheit'>
              <HeadingSegmentSecondary text='Ihr' />{' '}
              <HeadingSegmentSecondary800 text='Plus' />{' '}
              <HeadingSegmentSecondary text='an' />{' '}
              <HeadingSegmentSecondary800 text='Sicherheit' />
            </LinkedHeading>
            <section>
              <p class='leading-7'>
                Mit den angebotenen Phishing-Mails setzen wir neue Maßstäbe in
                Sachen Qualität und Authentizität. Mit Hilfe eines
                linguistischen Psychologenwerden die Anwender sprachlich subtil
                zum Öffnen der betrügerischen Mails bewegt. Flankiert wird der
                Erstellungsprozess von unserer generativen KI. Mit diesen
                Maßnahmen stellen wir sicher, dass unsere Phishing-Simulationen
                nur schwer als solche zu erkennen sind. Mit der hohen Qualität
                unserer Phishing-Simulationen schützen Sie sich und
                IhrUnternehmen vor modernen, KI-gestützten Phishing-Angriffen,
                wie sie immerhäufiger auftreten.
              </p>
            </section>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='entscheiden_sie_mit' backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source: '/img/cyber/cyber-portal/gesundheitswesen/Entscheiden.webp',
            alternateText: 'Man looking at the sunset'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#entscheiden_sie_mit'>
              <HeadingSegmentSecondary800 text='Entscheiden' />{' '}
              <HeadingSegmentSecondary text='Sie mit' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Mit unserem Gesundheits-Paket können Sie mitentscheiden, welche
              Inhalte für Ihre Mitglieder eingespielt werden sollen. Haben Sie
              bestimmte Domains oder E-Mail Themen im Sinn? Sprechen Sie mit
              uns! Durch Zusammenarbeit und individuelle Inhalte können wir noch
              genauere Phishing-Simulationen erstellen und besser Schulen. Es
              gibt noch einen weiteren Vorteil: Sie müssen kein neues Produkt
              evaluieren und einführen. Die Integration der Zusatzfunktionen
              erfolgt nahtlos und sofort bei Kauf. Sie erhalten sofort Zugriff
              auf die für Sie zugeschnittenen Inhalte.
            </p>

            <LinkCallToAction
              href='https://forms.office.com/e/tKwD5aqPJY'
              target='_blank'
            >
              Jetzt mit abstimmen
            </LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='fordern_sie_ihr_angebot_an'>
        <div class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#fordern_sie_ihr_angebot_an'>
            Fordern Sie Ihr{' '}
            <HeadingSegmentSecondary800 text='individuelles Angebot' /> an.
          </LinkedHeading>

          <p class='max-w-2xl'>
            Sichern Sie sich Ihr maßgeschneidertes Angebot - unkompliziert und
            in nur wenigen Schritten! Nach Ihrer Anfrage werden wir uns
            persönlich bei Ihnen melden, um alle Details zu besprechen.
          </p>

          <LinkCallToAction
            href='https://forms.office.com/e/x9y2sJSm8P'
            target='_blank'
          >
            Jetzt Angebot anfordern
          </LinkCallToAction>
        </div>
      </Section>

      <Section id='wichtig_fuer_cyber_verantwortliche' backgroundColor='gray'>
        <section class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#wichtig_fuer_cyber_verantwortliche'>
            Wichtig für <HeadingSegmentSecondary800 text='Anwender' />
          </LinkedHeading>

          <p class='mx-auto max-w-xl leading-7'>
            Die besten Phishing-Mails helfen nichts, wenn diese nicht den
            Posteingang des Empfängers erreichen. Geben Sie deshalb unseren
            E-Mail-Server und unsere Domains in Ihren Postfächern frei. Nur
            dadurch können Sie sicherstellen, dass Auswertungen zum
            Klickverhalten korrekt sind. Damit Sie schnell starten können, haben
            wir für gängige Anbieter wie GMX, Gmail und web.de Anleitungsvideos
            bereitgestellt.
          </p>

          <LinkCallToAction
            href='https://e.co-it.eu/cyberportal-adminkonfiguration'
            target='_blank'
          >
            Freigaberegeln anschauen
          </LinkCallToAction>

          <YouTubeVideoGrid videos={cyberVerantwortlicheVideos} />
        </section>
      </Section>

      <Section id='teilen_sie_uns_ihre_meinung_mit'>
        <section class='mb-14 flex flex-col items-center gap-y-8 px-4'>
          <LinkedHeading href='#teilen_sie_uns_ihre_meinung_mit'>
            Teilen Sie uns <HeadingSegmentSecondary800 text='Ihre Meinung ' />{' '}
            mit
          </LinkedHeading>

          <p class='max-w-xl'>
            Um unsere Pakete noch genauer auf Ihre Bedarfe zuschneiden zu
            können, machen wir aktuell eine anonyme Umfrage. Teil Sie uns mit,
            wie ein perfekt auf Sie abgestimmtes Paket aussieht. Die Umfrage
            dauert nur wenige Minuten.
          </p>

          <LinkCallToAction
            href='https://forms.office.com/Pages/ResponsePage.aspx?id=hqVrfY9Jf0mmHhFRXNyN_57QTiT3NkFCvqHHDSVqQ7RURDdIWlhERzZWNEJINUI4M1paNDRLN0pEVi4u'
            target='_blank'
          >
            Jetzt mitgestalten
          </LinkCallToAction>
        </section>
      </Section>

      <Section id='sie_wollen_ihre_anwender_schulen' backgroundColor='gray'>
        <div class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#sie_wollen_ihre_anwender_schulen'>
            Sie wollen <HeadingSegmentSecondary800 text='Ihre Anwender ' />{' '}
            schulen?
          </LinkedHeading>

          <p class='max-w-xl'>
            Für Kunden, die persönliche Schulung zu schätzen wissen, flankieren
            wir unser Portal mit maßgeschneiderten Trainings vor Ort und remote.
            Vereinbaren Sie gerne direkt einen Telefontermin.
          </p>

          <LinkCallToAction
            href='https://e.co-IT.eu/cyber/schulung'
            target='_blank'
          >
            Telefontermin auswählen.
          </LinkCallToAction>
        </div>
      </Section>

      <Section id='partner_it_sicherheit'>
        <div class='flex flex-col gap-y-8 px-4 sm:items-center'>
          <LinkedHeading href='#partner_it_sicherheit'>
            Sie suchen einen <HeadingSegmentSecondary800 text='Partner' /> für
            IT-Sicherheit?
          </LinkedHeading>

          <p class='max-w-xl'>
            Wir wären nicht, wer wir sind, wenn wir Veränderung nicht ganz zu
            Ende denken würden: Regelmäßig erreichen uns Anrufe und Mails, ob
            wir eine Bestandsaufnahme des IT-Sicherheit durchführen und - falls
            notwendig - Lücken schließen können. Die gute Antwort lautet: Ja.
            Die Inhalte für das Cyber Portal entstanden aus unseren
            Erkenntnissen und Erfahrungen, die wir in unserer Funktion als
            IT-Systemhaus gewinnen konnten. Hier können Sie eine kostenfreie,
            30-minütige Erstberatung.
          </p>

          <LinkCallToAction
            href='https://e.co-it.eu/cyber/erstberatung'
            target='_blank'
          >
            Erstberatung vereinbaren
          </LinkCallToAction>
        </div>
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
