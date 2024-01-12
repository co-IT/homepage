import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CheckCurvedIcon, LockCheckCurvedIcon } from '~/components/icons';
import { LinkCallToAction } from '~/components/link-call-to-action';
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
    heading: 'Passwörter mit anderen teilen',
    text: 'Stellen Sie sich Passkeys wie spezielle, geheime Codes vor, die Sie anstelle von normalen Passwörtern verwenden können. Wenn Sie auf Ihre Kontoinformationen zugreifen möchten, müssen Sie diesen besonderen Code eingeben. Im Gegensatz zu gewöhnlichen Passwörtern sind Passkeys oft länger und komplizierter, was sie schwieriger für andere macht, zu erraten. Sie sind so etwas wie magische Schlüssel, die nur Ihnen erlauben, auf Ihre wichtigen Dinge zuzugreifen und somit Ihre Informationen sicherer machen.'
  },
  {
    heading: 'Automatisches Ausfüllen durch Browser-Erweiterung',
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
    heading: 'Unterstützung diverser Betriebssysteme',
    text: 'Windows, Android, MAC, iOS, Linux'
  }
];

const leistungen = [
  {
    heading: 'Betrieb',
    text: 'Wir betreiben unsere Lösung alternativ auf Ihren Servern, in dem Rechenzentrum Ihrer Wahl oder als Software-as-a-Software im Rechenzentrum unserer Wahl. Sprechen Sie uns an, wir beraten Sie dazu gerne. Zudem überwachen wir die Verfügbarkeit und werden proaktiv bei Betriebsstörungen tätig.'
  },
  {
    heading: 'Wartung',
    text: 'Wir kümmern uns um das Einspielen neuster Sicherheitsupdates und das Beheben von Fehlern. Natürlich testen wir vorab alles ausgiebig, damit für Sie möglichst keine Probleme in der täglichen Nutzung entstehen.'
  },
  {
    heading: 'Datensicherung',
    text: 'Dank unserer langjährigen Erfahrungen sichern wir Ihre Daten mit in der Praxis bewährten Praktiken und Prinzipien. Regelmäßige Ausfalltests gehören für uns zum Selbstverständnis.'
  },
  {
    heading: 'Datenschutz',
    text: 'Mit einer Auftragsdatenverarbeitungsvereinbarung, wie sie die DSGVO fordert, sind Sie mit uns auf der sicheren Seite. Sofern Sie sich für den Betrieb auf unseren Servern entscheiden, bleiben die Daten in Deutschland.'
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
    thumb: '/img/products/passwort-manager/2-faktor-authentifizierung.webp'
  }
];

const sendFeatures = [
  {
    heading: 'Löschdatum festlegen',
    text: 'Die Information bzw. Datei wird nach einem von Ihnen festgelegten Ablaufdatum automatisch gelöscht.'
  },
  {
    heading: 'Maximale Zugriffszahl festlegen',
    text: 'Sie können bestimmen, wie oft der Link geöffnet werden kann bevor er ungültig wird.'
  },
  {
    heading: 'Passwortgeschützte Links',
    text: 'Sie können optional ein Passwort zum Öffnen des Links vergeben, das Sie dem Empfänger separat mitteilen.'
  },
  {
    heading: 'Verschlüsselte Notiz',
    text: 'Sie können private Notizen zu Ihren Dateien hinzufügen.'
  },
  {
    heading: 'Kombination für maximale Sicherheit',
    text: 'Kombinieren Sie alle Optionen, um das Maximum an Sicherheit zu erreichen.'
  }
];

export default component$(() => {
  return (
    <>
      <Section id='sicherheit_trifft_einfachheit'>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <LockCheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>
              <a href='#sicherheit_trifft_einfachheit'>
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

      <Section id='so_verstehen_wir_sicherheit' backgroundColor='gray'>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <LockCheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>
              <a href='#so_verstehen_wir_sicherheit'>
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
              eine quelloffene, sogenannte <strong>„Open Source“</strong>-
              Lösung, die von Sicherheitsexperten gesichtet und mit
              Schwarmintelligenz der Tausenden von Entwicklern verbessert werden
              kann.
              <br />
              <br />
              Gleichzeitig halten wir digitale Identitäten für so sensibel und
              schützenswert, dass sie in Deutschland gespeichert werden sollten
              und nicht in die Hände von Konzernen gehören. Darum ermöglichen
              wir Ihnen die Auswahl zwischen <strong>drei Betriebsmodi</strong>:
            </p>
            <ul class='list-inside list-disc text-xl'>
              <li>
                Wir stellen die Lösung auf Ihren lokalen Servern (On-Premise),
                <li>im Rechenzentrum Ihrer Wahl oder,</li>
              </li>
              <li>auf „unserer Hardware“ zur Verfügung.</li>
            </ul>
            <br />
            <p class='max-w-3xl text-xl leading-8 xl:max-w-6xl'>
              Wir nutzen dafür keine fertigen Dienste von Cloudanbietern,
              sondern provisionieren unser Produkt selbst auf dem angemieteten
              Server im Rechenzentrum.{' '}
              <strong>Damit behalten Sie die maximale Datenautonomie.</strong>
            </p>
          </section>
        </div>
      </Section>

      <Section id='leistungsumfang'>
        <div class='grid gap-12'>
          <header class='flex items-center gap-8'>
            <h2 class='text-4xl font-bold'>
              <a href='#leistungsumfang'>Leistungsumfang</a>
            </h2>
          </header>

          <div class='flex flex-wrap items-start gap-8'>
            {leistungen.map((leistung, key) => (
              <div class='flex max-w-lg items-start gap-8' key={key}>
                <section class='hidden md:block'>
                  <CheckCurvedIcon />
                </section>
                <section class='grid gap-2'>
                  <h2 class='text-xl font-bold'>{leistung.heading}</h2>
                  <p class='text-md leading-7'>{leistung.text}</p>
                </section>
              </div>
            ))}
          </div>

          <div class='mx-auto'>
            <LinkCallToAction
              href='https://e.co-IT.eu/passwort-mgmt/v1 '
              target='_blank'
            >
              Unsere Nutzungsbedingungen
            </LinkCallToAction>
          </div>
        </div>
      </Section>

      <Section id='funktionen' backgroundColor='gray'>
        <div class='grid gap-8'>
          <header>
            <h2 class='text-4xl font-bold'>
              <a href='#funktionen'>Funktionen</a>
            </h2>
          </header>

          <section class='grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2'>
            {pros.map((pro, key) => (
              <div class='flex max-w-lg items-start gap-8' key={key}>
                <section class='hidden md:block'>
                  <CheckCurvedIcon />
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

      <Section id='videos'>
        <div class='grid gap-8'>
          <header>
            <h2 class='text-4xl font-bold'>
              <a href='#videos'>Demos unserer Lösung</a>
            </h2>
          </header>

          <YouTubeVideoGrid videos={videos} />
        </div>
      </Section>

      <Section
        id='zusatzfunktion_sichere_datenuebermittlung'
        backgroundColor='gray'
      >
        <div class='grid gap-8'>
          <header class='flex items-center gap-8'>
            <h2 class='text-4xl font-bold'>
              <a href='#zusatzfunktion_sichere_datenuebermittlung'>
                Zusatzfunktion: Sichere Datenübermittlung
              </a>
            </h2>
          </header>

          <p class='max-w-5xl text-xl leading-8'>
            Buchen Sie die Option für sichere Datenübermittlung dazu. Damit ist
            es Ihnen möglich Inhalte, z.B. Texte oder Dateien, als sichere Links
            an Ihre Geschäftspartner zu verschicken. Seien es vertrauliche
            Unterlagen für Ihren Wirtschaftsprüfer, Zugänge an externe
            Dienstleister oder sensible Kreditkartendaten an Ihre Mitarbeiter.
            <br />
            <br />
            Nutzen Sie Einmal-Links: Hat ihre Vertrauensperson den Link geöffnet
            und den Inhalt gelesen bzw. heruntergeladen, wird der Link
            automatisch ungültig. Kommen Angreifer in Besitz der Links, z.B.
            weil das E-Mail-Konto des Empfängers gehackt wurde, sind diese
            wertlos.
          </p>

          <h3 class='text-xl font-semibold'>Alle Funktionen im Überblick</h3>
          <div class='flex flex-wrap items-start gap-8'>
            {sendFeatures.map((feature, key) => (
              <div class='flex max-w-lg items-start gap-8' key={key}>
                <section class='hidden md:block'>
                  <CheckCurvedIcon />
                </section>
                <section class='grid gap-2'>
                  <h2 class='text-xl font-bold'>{feature.heading}</h2>
                  <p class='text-md leading-7'>{feature.text}</p>
                </section>
              </div>
            ))}
          </div>
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
        heading: 'Passwort-Manager für Unternehmen',
        headingAccent: 'Digitale Identitäten sicher organisieren.'
      }
    }
  }
};
