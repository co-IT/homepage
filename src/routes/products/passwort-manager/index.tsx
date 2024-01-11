import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {
  CheckCurvedIcon,
  LockCheckCurvedIcon,
  LockIcon
} from '~/components/icons';
import { Section } from '~/components/section';

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

export default component$(() => {
  return (
    <>
      <Section>
        <div class='flex flex-wrap items-start gap-8'>
          <section>
            <LockCheckCurvedIcon />
          </section>
          <section class='grid gap-2'>
            <h2 class='text-4xl font-bold'>Sicherheit trifft Einfachheit!</h2>
            <p class='max-w-5xl text-xl leading-8'>
              Schützen Sie vertrauliche Dokumente mit unserer revolutionären
              Lösung. Verschlüsseln Sie wichtige Dateien mühelos und speichern
              Sie Zugangscodes sicher in unserem digitalen Tresor. Teilen Sie
              sensible Informationen mit einem speziell generierten Link, der
              nach einmaligem Gebrauch verfällt - Ihre Daten bleiben geschützt
              und Ihr Kopf bleibt frei.
            </p>
          </section>
        </div>
      </Section>

      <Section backgroundColor='gray'>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>Ihre Vorteile</h2>
          </header>

          <section class='flex flex-wrap gap-x-8 gap-y-16'>
            {pros.map((pro, key) => (
              <div class='flex max-w-lg items-start gap-8' key={key}>
                <section>
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

      <Section>
        <div class='grid gap-8'>
          <header class='flex items-center gap-2'>
            <CheckCurvedIcon />
            <h2 class='text-4xl font-bold'>Sends!</h2>
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
          source: '/img/cyber/cyber-portal/white-label/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Passwort-Manager',
        headingAccent: 'Endlich.Sicher.'
      }
    }
  }
};
