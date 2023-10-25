import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContactPossibilitiesGrid } from '~/components/contact-possibilities-grid';
import { MapSection } from '~/components/map-section';
import { Section } from '~/components/section';

export default component$(() => {
  return (
    <>
      <Section backgroundColor='white'>
        <ContactPossibilitiesGrid />
      </Section>

      <Section backgroundColor='white'>
        <MapSection />
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Kontakt',

  frontmatter: {
    header: {
      type: 'default',
      configuration: {
        heading: 'Kontakt aufnehmen'
      }
    },
    footer: {
      disableContactPossibilitiesGrid: true
    }
  }
};
