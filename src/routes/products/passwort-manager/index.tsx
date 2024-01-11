import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CheckIcon } from '~/components/icons';
import { Section } from '~/components/section';

export default component$(() => {
  return (
    <>
      <Section>
        <div class='flex'>
          <section>
            <CheckIcon />
          </section>
          <section>
            <h2>Sicherheit trifft Einfachheit!</h2>
            <p class='leading-7'>
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
