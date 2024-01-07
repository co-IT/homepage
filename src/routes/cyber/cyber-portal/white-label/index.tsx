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
              <HeadingSegmentSecondary text='Hervorstechen,' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Anderssein' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
Was macht ihr Geschäft aus? Gehen Sie für Ihre Kunden gerne einen Schritt weiter als sie müssten? Gehen Sie gerne neue Wege? Haben Sie innovative Produkte? Jedes Unternehmen wird für das, was es auszeichnet und abhebt, als Marke wahrgenommen. Diese Einzigartigkeit in der digitalen Welt auszudrücken, sollte ebenso einzigartig sein.
            </p>
            <p class='pb-4 leading-7'>
Nutzen Sie dafür unser Cyber-Produkt: Es bietet Ihren Kunden einen Raum, um nachhaltiges Praxiswissen auf verständliche Weise zu erlernen, dieses mit intensiven Prüfungen und realistischen Simulationen zu festigen und dabei Lernfortschritte systematisch sicherzustellen.
            </p>
            <p class='pb-4 leading-7'>
Wir transportieren Ihre Marke auf moderne Weise, indem wir unsere Lösung in ihrem firmeneigenen Branding und auf Ihre Kundenbedürfnisse zugeschnitten betreiben. Erweitern Sie es optional mit eigenen Inhalten oder lassen Sie uns dedizierte Cyber-Werkzeuge für Ihre Anwender einbauen. Machen Sie Werbung mit ihrem Cyber-Produkt, binden Sie langjährige Bestandskunden noch enger oder steigern Sie Ihre Verkäufe mit kostenfreien Zugängen.
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
              <HeadingSegmentSecondary text='Beispiel:' />
              &nbsp;
              <HeadingSegmentSecondary800 text='Württembergische' />
            </LinkedHeading>
            <p class='pb-4 leading-7'>
Die Württembergische Versicherung bietet beispielsweise allen Versicherungsnehmern, die eine Cyber-Versicherung für Schäden aus Ransomware-Angriffen abschließen, einen kostenlosen Zugang zum „Cyber Portal“. Unser Cyber-Produkt wurde in enger Absprache für die Bedarfe der Versicherungsnehmer adaptiert und <a href="https://wuerttembergische.co-IT.eu">hier</a> bereitgestellt. Die Württembergische verbindet dabei das Notwendige mit dem Nützlichen: Sie reduzieren Cyber-Risiken in den versicherten Unternehmen und heben sich von anderen Versicherern ab.
            </p>
            <p class='pb-4 leading-7'>
Das Ergebnis zeigt die folgende Videoserie.

          <YouTubeVideoGrid videos={anwenderVideos} />
            </p>
          </section>
        </ContentOverlapPortrait>
      </Section>

      <Section id='cyber_portal'>
        <VideoOverlapLandscape youTubeVideoId='_SZyfQB7n7k'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#cyber_portal'>
              <HeadingSegmentSecondary text='Die Basis der' />{' '}
              <HeadingSegmentSecondary800 text='Cyber-Plattform' />
            </LinkedHeading>
            <p class='leading-7'>
Unsere Cyber-Plattform bietet Ihnen von Haus aus sechs Kurse mit praktischen Fähigkeiten und essenziellem Wissen für den sicheren Umgang in der digitalen Welt. In vier Examen mit anspruchsvollen, interaktiven Prüfungen können Ihre Kunden bzw. deren Mitarbeiter das Gelernte festigen. Abgerundet wird die Leistung mit dem Werkzeugkasten, der unter anderem die eigene Passwortsicherheit prüfen kann.
            </p>
            <p class='leading-7'>
Das besondere Highlight sind unsere Phishing-Simulationen, mit denen Mitarbeiter kontinuierlich sensibilisiert werden. Damit können Ihre Kunden Cyber Risiken erheblich reduzieren und gleichzeitig wichtige IT-Richtlinien (z.B. NIS 2) umsetzen. 
            </p>
          </section>
        </VideoOverlapLandscape>
      </Section>

      <Section id='ihr_cyber-paket' backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='4pvfj1ggRlQ'>
          <section class='flex flex-col space-y-4'>
            <LinkedHeading href='#ihr_cyber-paket'>
              <HeadingSegmentSecondary text='Ihre Marke,' />{' '}
              <HeadingSegmentSecondary800 text='Ihr Geschäftsmodell' />
            </LinkedHeading>
            <p class='leading-7'>
             Die folgenden Beispiele sollen Ihnen als Denkanstoß dienen, wie Sie Ihre Marke mit unserer Cyber-Plattform digitalisieren können:
            </p>
            <p class='leading-7'>
           Kanzleien könnten ihren Mandanten ein Produkt an die Hand geben, um sie für Cyber-Risiken zu sensibilisieren. Gleichzeitig ließen sich dort gezielt Ihre Inhalte zu Datenschutz und Arbeitssicherheit multimedial platzieren.
            </p>
            <p class='leading-7'>
    Als Branchenverband wäre eine eigene Instanz unserer Cyber-Lösung denkbar, bei der Sie Ihren Mitgliedern ein effektives Werkzeug zur Einhaltung von Gesetzen und Richtlinien zur Verfügung stellen. Auf unserer Seite fürs Gesundheitswesen zeigen wir, wie spezifische Phishing-Simulationen und Anleitungen für Apotheken aussehen könnten.
            </p>
            <p class='leading-7'>
       Als Agentur, Makler oder Vertreter kann unsere Cyber-Plattform für Sie einen Weg darstellen, um sich von Mitbewerbern abzuheben und einen Unique Selling Point zu schaffen.
            </p>
            <p class='leading-7'>
Wir, die co-IT.eu GmbH, bieten unseren großen Kunde bei Abschluss eines Rahmenvertrags Zugang zu unserer Cyber-Instanz namens „Cyber Lounge“ an. Je nach finanziellem Umfang des Abschlusses erhalten unsere Klienten rabattierte oder kostenlose Zugänge. Wir stellen dort unter anderem Videokurse für die bei uns gekauften Lösungen (z.B. für die Passwort-Management-Software) bereit. Zudem bieten wir individuelle Auswertungen zu den Phishing-Simulationen an.
            </p>
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
              <HeadingSegmentSecondary text='Erweitern,' />{' '}
              <HeadingSegmentSecondary800 text='Individualisieren' />
            </LinkedHeading>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
              Unsere Cyber-Plattform wurde so konzipiert, dass wir Ihr Corporate Design darauf anwenden, es mit Ihren Inhalten füllen und es für Sie und Ihre Kunden um sinnvolle Funktionen erweitern können.
            </p>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
Fangen Sie doch mit einer Schnittstelle an, über welche Sie automatisiert Kunden freischalten oder Einladungen mit individuellen Rabattcodes verschicken können.
            </p>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
Als nächstes könnten Sie eine Ihrer Leistungen in unserem Werkzeugkasten platzieren. Bieten Sie vielleicht vollautomatisierte Gutachten oder Risikobewertungen an, so integrieren wir diese gerne für Sie.
            </p>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
Haben Sie relevante Inhalte für Ihre Zielgruppe, zum Beispiel weil Sie Beratungsleistung erbringen, dann können wir mit Ihnen gemeinsam das Wissen in Form von multimedialen Kursen einsteuern. Optional können mit Ihnen Prüfungen einbauen, was z.B. bei Compliance-Richtlinien sehr nützlich sein kann.
            </p>
            <p class='whitespace-pre-line text-left text-base font-normal leading-7 tracking-normal text-black opacity-80 '>
In jedem Fall ist es immer möglich für Sie, ganz individuell, Ihre Wünsche umzusetzen. Unser Entwicklerteam freut sich über jede Herausforderung.
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
  title: 'co-IT - Ihre Marke als Cyber-Produkt',

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/cyber/cyber-portal/white-label/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Ihre Cyber-Marke',
        headingAccent: 'Verleihen Sie Ihrer Besonderheit Ausdruck.'
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
