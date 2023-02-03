import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContactPossibilitiesGrid } from '~/components/contact-possibilities-grid';
import { MapSection } from '~/components/map-section';
import { SectionArea } from '~/components/section-area';

export default component$(() => {
  return (
    <>
      <SectionArea backgroundColor='white'>
        <ContactPossibilitiesGrid />
      </SectionArea>

      <SectionArea backgroundColor='white'>
        <MapSection />
      </SectionArea>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ],
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
