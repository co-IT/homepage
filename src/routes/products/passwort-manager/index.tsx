import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  CheckCurvedIcon,
  LockCheckCurvedIcon,
  LockIcon
} from '~/components/icons';
import { Section } from '~/components/section';
import type { YouTubeVideo } from '~/components/youtube';
import { YouTubeVideoGrid } from '~/components/youtube';

const pros = [
  {
    heading: 'Automatische Erstellung starker Passwörter',
    text: 'Nutzen Sie unseren eigenen Passwortgenerator, um automatisch sichere und komplizierte Passwörter zu generieren. Das hilft dabei, Ihre Konten und Daten bestmöglich zu schützen.'
  },
  {
    heading: 'Windows Hello Support',
    text: 'Mit der Sicherheitsfunktion von Windows können Sie biometrische Identifikationsmethoden wie Gesichtserkennung oder Fingerabdruckscan verwenden, um den Zugriff auf Ihre Konten zu vereinfachen und die Sicherheit zu erhöhen.'
  },
  {
    heading: 'Unterstützung von Sicherheitscodes (Passkeys)',
    text: 'Stellen Sie sich Passkeys wie spezielle, geheime Codes vor, die Sie anstelle von normalen Passwörtern verwenden können. Wenn Sie auf Ihre Kontoinformationen zugreifen möchten, müssen Sie diesen besonderen Code eingeben. Im Gegensatz zu gewöhnlichen Passwörtern sind Passkeys oft länger und komplizierter, was sie schwieriger für andere macht, zu erraten. Sie sind so etwas wie magische Schlüssel, die nur Ihnen erlauben, auf Ihre wichtigen Dinge zuzugreifen und somit Ihre Informationen sicherer machen.'
  },
  {
    heading: 'Passwörter mit anderen Teilen',
    text: 'Stellen Sie sich Passkeys wie spezielle, geheime Codes vor, die Sie anstelle von normalen Passwörtern verwenden können. Wenn Sie auf Ihre Kontoinformationen zugreifen möchten, müssen Sie diesen besonderen Code eingeben. Im Gegensatz zu gewöhnlichen Passwörtern sind Passkeys oft länger und komplizierter, was sie schwieriger für andere macht, zu erraten. Sie sind so etwas wie magische Schlüssel, die nur Ihnen erlauben, auf Ihre wichtigen Dinge zuzugreifen und somit Ihre Informationen sicherer machen.'
  },
  {
    heading:
      'Automatisches Ausfüllen durch Browser-Erweiterung mit anderen Teilen',
    text: 'Mit der zugehörigen Browser-Erweiterung können Sie die Funktionen unseres Passwortmanagers bequem in Ihrem Webbrowser verwenden. Das automatische Ausfüllen von Passwörtern ist eine Funktion, die es ermöglicht, gespeicherte Passwörter in Webformularen oder Anmeldeseiten automatisch einzufügen, um Ihnen den Sicherheitsprozess so angenehm wie Möglich zu gestalten.'
  },
  {
    heading: 'Doppelt abgesichert',
    text: 'Stellen Sie sich die Zwei-Faktor-Authentifizierung (2FA) wie einen doppelten Schutzschild für Ihr Konto vor. Normalerweise verwenden Sie nur ein Passwort, um darauf zuzugreifen, aber mit 2FA fügen Sie einen zweiten Schutz hinzu. Das ist vergleichbar mit dem Öffnen eines Safes: Zuerst benötigen Sie den richtigen Schlüssel (Ihr Passwort), aber zusätzlich muss noch ein Fingerabdruck (oder ein anderer zweiter Schutz) überprüft werden, um sicherzustellen, dass nur Sie auf die wertvollen Dinge zugreifen können. Zusammen machen diese beiden Dinge den Zugriff auf Ihr Konto viel sicherer.'
  },
  {
    heading: 'Nicht nur ein Passwortmanager',
    text: 'Sie können in unserem Tresor nicht nur Ihre Passwörter schützen. Ihnen ist es möglich, alle Arten von sensiblen Daten abzusichern.'
  },
  {
    heading: 'Server Standort in Deutschland oder bei Ihnen vor Ort',
    text: 'Sie können den Dienst über uns hosten lassen oder on Premise bei Ihnen vor Ort - ganz nach Ihren Wünschen.'
  },
  {
    heading: 'Unterstützung diverser Betriebssysteme',
    text: 'Windows, Android, MAC, IOS'
  }
];

const sendFeatures = [
  {
    heading: 'Löschdatum festlegen',
    text: 'Die Datei wird nach einem von Ihnen festgelegten Ablaufdatum automatisch gelöscht'
  },
  {
    heading: 'Löschdatum Maximale Zugriffszahl festlegen',
    text: 'Sie können bestimmen, wie oft sich der Empfänger die Datei ansehen kann'
  },
  {
    heading: 'Passwortgeschütztes Versenden',
    text: 'Sie können optional auch ein selbstbestimmtes Passwort verlangen, damit der Empfänger auf die Datei zugreifen kann'
  },
  {
    heading: 'Verschlüsselte Notiz',
    text: 'Sie können private Notizen zu Ihren Dateien hinzufügen'
  }
];

const ossCriteria = [
  {
    heading: 'Transparenz',
    text: 'Der Quellcode unseres Passwortmanagers ist öffentlich zugänglich. So können Sie sicherstellen, dass keine unsicheren Praktiken oder unerwünschte Funktionen genutzt werden und Ihre Daten sicher sind.'
  },
  {
    heading: 'Gemeinschaftsgetriebene Entwicklung',
    text: 'Open-Source-Software profitiert von der Zusammenarbeit einer breiten Entwicklergemeinschaft. Fehler und Sicherheitslücken werden schneller erkannt und behoben, da viele Augen den Code überprüfen.'
  },
  {
    heading: 'Passwortgeschütztes Versenden',
    text: 'Sie können optional auch ein selbstbestimmtes Passwort verlangen, damit der Empfänger auf die Datei zugreifen kann'
  },
  {
    heading: 'Verschlüsselte Notiz',
    text: 'Sie können private Notizen zu Ihren Dateien hinzufügen'
  }
];

const videos: YouTubeVideo[] = [
  {
    id: '66uq_I0ODRQ',
    title: 'Weboberfläche',
    thumb: '/img/products/passwort-manager/web.webp'
  },
  {
    id: 'wYEoI1Glws0',
    title: 'Desktop App',
    thumb: '/img/products/passwort-manager/desktop.webp'
  },
  {
    id: 'NGvVQT8oxQY',
    title: 'Browser Extension',
    thumb: '/img/products/passwort-manager/browser-extension.webp'
  },
  {
    id: 'e2VOF3LxNxI',
    title: '2 -Faktor Authentifizierung',
    thumb: '/img/products/passwort-manager/desktop.webp'
  }
];

export default component$(() => {
  return (
    <>
      <Section id='sicherheit_auf_knopfdruck'>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <LockCheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>
              <a href='#sicherheit_auf_knopfdruck'>
                Sicherheit trifft Einfachheit
              </a>
            </h2>
            <p class='max-w-3xl text-xl leading-8 xl:max-w-6xl'>
              Was haben das On-/Offboarding von Mitarbeitern, die Vielfalt an
              betrieblichen Arbeitsgeräten und die Datenschutz-Grundverordnung
              gemeinsam? Sie erfordern eine möglichst flexible, besonders
              anwenderfreundliche, maximal sichere und unternehmensweite
              Organisation Ihrer Zugänge.
              <br />
              <br />
              Mit unserem Verständnis für Unternehmensstrukturen und unserer
              technisch hochmodernen Lösung etablieren wir mit Ihnen gemeinsam
              ein zentrales Passwortmanagement, das Ihre sensiblen Daten
              schützt, höchste Sicherheitsansprüche erfüllt und gleichzeitig
              Ihre individuellen Prozesse abbildet.
            </p>
          </section>
        </div>
      </Section>

      <Section backgroundColor='gray' id='sicherheit_trifft-einfachheit'>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <LockCheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>
              <a href='#sicherheit_trifft-einfachheit'>
                So verstehen wir Sicherheit
              </a>
            </h2>
            <p class='max-w-3xl text-xl leading-8 xl:max-w-6xl'>
              Ob ein Unternehmen gesund aufgestellt ist, erkennen Sie nicht
              durch einen Blick auf dessen Webseite. Sie müssen in das
              Unternehmen reinschauen, mit den Beteiligten sprechen und Interna
              sichten.
              <br />
              <br />
              Das Gleiche gilt für Software: Die Sicherheit lässt sich nur durch
              den Blick in den Programmcode bewerten. Deshalb setzen wir auf
              eine quelloffene, sogenannte „Open Source“ Lösung, die von
              Sicherheitsexperten gesichtet und mit Schwarmintelligenz der
              Tausenden von Entwicklern verbessert werden kann.
              <br />
              Gleichzeitig halten wir digitale Identitäten für so sensibel und
              schützenswert, dass sie in Deutschland gespeichert werden sollten
              und nicht in die Hände von Konzernen gehören. Darum ermöglichen
              wir Ihnen die Auswahl zwischen drei Betriebsmodi: Wir stellen die
              Lösung auf Ihren lokalen Servern (On-Premise), im Rechenzentrum
              Ihrer Wahl oder auf „unserer Hardware“ zur Verfügung.
              <br />
              Wir nutzen dafür keine fertigen Dienste von Cloudanbietern,
              sondern provisionieren unser Produkt selbst auf dem angemieteten
              Server im Rechenzentrum. Damit behalten Sie die maximale
              Datenautonomie.
            </p>
          </section>
        </div>
      </Section>

      <Section id='ihre_vorteile'>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>
              <a href='#ihre_vorteile'>Ihre Vorteile</a>
            </h2>
          </header>

          <section class='grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2'>
            {pros.map((pro, key) => (
              <div class='flex max-w-lg items-start gap-8' key={key}>
                <section class='hidden md:block'>
                  <LockIcon />
                </section>
                <section class='grid gap-2'>
                  <h2 class='text-xl font-bold'>{pro.heading}</h2>
                  <p class='text-md leading-7'>{pro.text}</p>
                </section>
              </div>
            ))}
          </section>
        </div>
      </Section>

      <Section backgroundColor='gray' id='sends'>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>
              <a href='#sends'>Sends!</a>
            </h2>
          </header>

          <p class='max-w-5xl text-xl leading-8'>
            Vertraulichkeit neu definiert! Mit unserer Lösung senden Sie Ihre
            vertraulichen Dokumente absolut sicher an Ihren Steuerberater. Kein
            unbefugter Zugriff, vollständige Kontrolle mit Ablaufdatum und
            Passwortschutz. Unsere einmalige Öffnungsfunktion gewährleistet,
            dass Ihre sensiblen Informationen nur von den richtigen Augen
            gesehen werden. Datenschutzkonform und effizient - Ihre Daten, Ihre
            Sicherheit, unsere Priorität.
          </p>

          <h3 class='text-xl font-semibold'>Ihre Funktionen im Überblick</h3>
          <div class='flex flex-wrap items-start gap-8'>
            {sendFeatures.map((feature, key) => (
              <section class='grid gap-2' key={key}>
                <h2 class='font-semibold'>{feature.heading}</h2>
                <p class='max-w-md leading-7'>{feature.text}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section id='vertragsvorschau'>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <CheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>
              <a href='#vertragsvorschau'>Vertragsvorschau</a>
            </h2>
            <p class='max-w-3xl text-xl leading-8 xl:max-w-6xl'>
              Entdecken Sie Details Ihres Vertrags im Voraus. Lesen Sie unsere
              Allgemeinen Geschäftsbedingungen (
              <a
                class='hover:underline'
                href='http://e.co-it.eu/agb'
                target='_blank'
              >
                AGB
              </a>
              ) , um einen klaren Einblick in die vereinbarten Konditionen zu
              erhalten, noch bevor spezifische Details verhandelt werden. LINK
            </p>
          </section>
        </div>
      </Section>

      <Section backgroundColor='gray' id='open_source'>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>
              <a href='#open_source'>Open Source</a>
            </h2>
          </header>

          <div class='flex flex-wrap items-start gap-8'>
            {ossCriteria.map((criterion, key) => (
              <section class='grid gap-2' key={key}>
                <h2 class='font-semibold'>{criterion.heading}</h2>
                <p class='max-w-md leading-7'>{criterion.text}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section id='videos'>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>
              <a href='#videos'>Videos</a>
            </h2>
          </header>

          <YouTubeVideoGrid videos={videos} />
        </div>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Passwort-Manager',

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/products/passwort-manager/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Passwort-Manager',
        headingAccent: 'Endlich.Sicher.'
      }
    }
  }
};
