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

import { anwenderVideos, gesundheitswesenFeatures } from './resources';

import { LinkedHeading } from '~/components/link-heading';
import { ProductFeatureList } from '~/components/product-feature-list';

import { YouTubeVideoGrid } from '~/components/youtube';
import { LinkCallToAction } from '../../phishing/components';

import PharmassecLogo from '~/media/gesundheitswesen/pharmassec_logo.png?jsx';

export default component$(() => {
  return (
    <>
      <Section id='digitale-krankheiten'>
        <ContentOverlapPortrait
          image={{
            source:
              '/img/cyber/cyber-portal/gesundheitswesen/besonderheiten.webp',
            alternateText: '3 Holzklötze die aufeinandergestapelt sind'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#digitale-krankheiten'>
              <HeadingSegmentSecondary text='Digitale' />{' '}
              <HeadingSegmentSecondary800 text='Krankheiten' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Im Gesundheitswesen haben Sie täglich mit Krankheiten und
              Einschränkungen zu tun. In Ihrem jeweiligen Spezialgebiet wissen
              Sie, was gute Prävention ausmacht, wie in akuten Situationen
              vorzugehen ist und wann es für Spezialfälle besondere Lösungen
              braucht. Jeder Patient und jede Patientin wird individuell beraten
              und behandelt.
              <br />
              Wir wissen welchen wertvollen Beitrag Apotheken, Arztpraxen,
              Sanitätshäuser und Therapeuten leisten. Darum wollen wir Ihnen die
              gleiche Wertschätzung entgegenbringen und uns um Ihre digitale
              Gesundheit kümmern - am besten präventiv, damit Viren und
              Ransomware keine Chance haben. Nicht mit einer Einheitslösung,
              indem wir alle über einen Kamm scheren, sondern individuell und
              auf den Punkt.
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='moderne_praevention' backgroundColor='gray'>
        <ContentOverlapPortrait
          image={{
            source:
              '/img/cyber/cyber-portal/gesundheitswesen/unser_antrieb.webp',
            alternateText: 'Unser Antrieb'
          }}
        >
          <section q:slot='article' class='flex flex-col space-y-4'>
            <LinkedHeading href='#moderne_praevention'>
              <HeadingSegmentSecondary text='Moderne' />{' '}
              <HeadingSegmentSecondary800 text='Prävention' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
              Wir wollen Ihnen die fachliche Kompetenz, die praktischen
              Fähigkeiten und das notwendige Wissen vermitteln, um sich in der
              digitalen Welt sicher zu fühlen und bestmöglich sicher zu sein.
              Unser Medikament dafür nennt sich Cyber Portal und bietet Ihnen
              und Ihren Anwendern einen Raum, um nachhaltiges, praktisches
              Wissen auf verständliche Weise zu erlernen, dieses mit intensiven
              Prüfungen und realistischen Simulationen zu festigen sowie
              Lernfortschritte systematisch sicherzustellen.
              <br />
              Die Plattform ist eine Individuallösung und in der Basisversion
              für alle Versicherungsnehmer der Württembergischen Versicherung
              kostenlos, damit alle Anwender gleichermaßen davon profitieren.
              Machen Sie sich in der folgenden Videoserie selbst einen Eindruck.
              Besitzen Sie keine Cyberpolice bei der Württembergischen, haben
              wir eine Alternative für Sie.
            </p>
            <LinkCallToAction
              href='https://e.co-it.eu/cyber-paket-vorstellung'
              target='_blank'
            >
              Sprechen Sie uns an
            </LinkCallToAction>
          </section>
        </ContentOverlapPortrait>
      </Section>

      {
        // TODO Video Serie einbinden
      }

      <Section id='cyber_portal'>
        <VideoOverlapLandscape youTubeVideoId='4pvfj1ggRlQ'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#cyber_portal'>
              <HeadingSegmentSecondary text='Spezifische Rezeptur, bessere' />{' '}
              <HeadingSegmentSecondary800 text='Wirksamkeit' />
            </LinkedHeading>
            <p class='leading-7'>
              Wir haben uns genau angeschaut, was Sie im Gesundheitswesen
              brauchen, führten etliche individuelle Gespräche und werteten eine
              Vielzahl an Vorfällen aus. Immer mit dem Ohr am Puls der Zeit,
              haben wir natürlich auch die Entwicklung der NIS 2 Richtlinie und
              des IT-Sicherheitsgesetz 2 beobachtet.
              <br />
              Als Teil der kritischen Infrastruktur und mit aus DSGVO Sicht
              besonders sensiblen Patientendaten betraut, haben wir für Sie eine
              individuelle Rezeptur unsere hochwertigen Phishing-Simulationen
              erstellt:
            </p>
            <ul class='list-inside list-disc'>
              <li>
                Authentische Adressen wie ratiopharm-info.de und
                apotheker-netzwerk.de
              </li>
              <li>
                Seriöse Inhalte, z.B. zum E-Rezept und zu konkreten Medikamenten
              </li>
              <li>Auf Wunsch mehr individuelle Inhalte</li>
              <li>
                Maßgeschneiderte Anleitungen für häufig eingesetzte
                E-Mail-Dienstleister
              </li>
              <li>Bessere Dosierung von Phishing-Mails</li>
              <li>Unternehmenszertifikat</li>
              <li>Niedrigere Preise pro Anwender</li>
            </ul>
            <p>
              Sehen und bewerten Sie selbst die gezeigten Simulationen im
              folgenden Video.
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='cyber-paket_gesundheitswesen'>
        <div class='grid grid-flow-row justify-center gap-16 sm:grid-flow-col'>
          <div class='mx-auto grid items-start gap-8 rounded-md p-4 shadow-md'>
            <PharmassecLogo />
            <ProductFeatureList features={gesundheitswesenFeatures} />
            <LinkCallToAction
              href='https://e.co-it.eu/cyber-paket-vorstellung'
              target='_blank'
            >
              Termin vereinbaren
            </LinkCallToAction>
          </div>
          <section class='flex max-w-md flex-col gap-4 px-4'>
            <LinkedHeading href='#cyber-paket_gesundheitswesen'>
              <HeadingSegmentSecondary text='Das Cyber-Paket fürs' />{' '}
              <HeadingSegmentSecondary800 text='Lösung' />
            </LinkedHeading>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
              Vertreten Sie im Gesundheitswesen eine Unternehmensgruppe, z.B.
              Apotheken, Ärzte oder Sanitätshäuser, dann nehmen Sie Kontakt zu
              uns auf. Wir gestalten gerne mit Ihnen gemeinsam den Paketumfang
              und finden preislich die attraktivste Branchenlösung.
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
    },
    footer: {
      attributions: [
        {
          title: 'Designed by Freepik',
          images: [
            {
              title: 'Vorderansicht Arzt',
              href: 'https://de.freepik.com/fotos-kostenlos/vorderansichtarzt-der-medizinisches-element-haelt_12412966.htm#page=3&query=medizin%20baustein&position=13&from_view=search&track=ais&uuid=f0b16208-40f7-4803-915b-235db8c7ae36'
            },
            {
              title: 'Nahaufnahme des Gesundheitspersonals',
              href: 'https://de.freepik.com/fotos-kostenlos/nahaufnahme-des-gesundheitspersonals_18776122.htm#page=2&query=%C3%A4rzte%20h%C3%A4nde&position=21&from_view=search&track=ais&uuid=6463e737-bb77-4a3f-ad43-dd1677d23d94'
            }
          ]
        }
      ]
    }
  }
};
