import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContactPossibilitiesGrid } from '~/components/contact-possibilities-grid';
import { MapSection } from '~/components/map-section';
import { SectionArea } from '~/components/section-area';

export default component$(() => {
  return (
    <>
      <SectionArea backgroundColor="white">
        <ContactPossibilitiesGrid />
      </SectionArea>

      <SectionArea backgroundColor="white">
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
      type: 'landing-page',
      configuration: {
        backgroundImage: {
          source: '/img/landing-page/header.avif',
          alt: 'Two men writing on a flip chart'
        },
        headingSegments: [
          { type: 'white', text: 'Sie wollen' },
          { type: 'accent', text: 'Herausforderungen als Chancen' },
          { type: 'white', text: 'nutzen?' }
        ],
        teaser:
          'Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist es Veränderungen zu etwas Positivem zu machen.'
      }
    }
  }
};
