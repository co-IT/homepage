import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { VideoOverlapLandscape } from '~/components/content-overlap';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { HeadingSegmentSecondary } from '../../components/heading-segment';
import { SectionArea } from '../../components/section-area';

export default component$(() => {
  return (
    <SectionArea>
      <VideoOverlapLandscape youTubeVideoId='QVArEtvAGsk'>
        <section class='flex flex-col space-y-4'>
          <h2 class='font-bold text-xl md:text-4xl'>
            <HeadingSegmentSecondary text='Eine Idee auf die Straße gebracht' />
          </h2>
          <p class='leading-7'>
            Wie arbeitet die Werkstatt von morgen? Mobil am und unterm Auto? Was
            wünschen sich die Kunden dieser Werkstätte? Soll der nächste freie
            Reifenwechseltermin sofort reserviert werden können? Wie
            unterscheiden sich die Bedarfe von PKW und NFZ? Bei unserem Partner,
            der Werbas GmbH, durften wir unsere Lösungskompetenz entlang der
            gesamten Wertschöpfungskette einbringen. Heraus kam das neue
            Werkstattmanagementsystem Werkstatt.NXT.
          </p>
          <LinkCallToAction
            href='https://www.werkstatt-nxt.com/'
            target='_blank'
          >
            Zu Werkstatt.NXT
          </LinkCallToAction>
        </section>
      </VideoOverlapLandscape>
    </SectionArea>
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
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/solutions/header.avif',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Alles aus einer Hand',
        headingAccent: 'Vollumfänglich statt punktuell'
      }
    }
  }
};
