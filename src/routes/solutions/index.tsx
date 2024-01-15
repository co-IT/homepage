import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ArticleCard } from '~/components/article-section/article-card';
import { VideoOverlapLandscape } from '~/components/content-overlap';
import { HeadingSegmentSecondary } from '~/components/heading-segment';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { Section } from '~/components/section';

export default component$(() => {
  return (
    <div>
      <Section>
        <ArticleCard
          article={{
            direction: 'right',
            image: {
              src: '/img/solutions/people-network.svg',
              alt: 'Drawing of a network of three people'
            },
            heading: 'Kennen Sie das auch?',
            text: `Sie beziehen unterschiedliche Leistungen von unterschiedlichen Dienstleistern? Ist es für Sie eine Herausforderung alle zu koordinieren, Informationen weiterzutragen und selbst das Puzzle aus vielen Stücken zusammenzusetzen? Passen die Puzzleteile am Ende regelmäßig nicht zusammen und Ihre Dienstleister reichen den schwarzen Peter lediglich an den nächsten weiter? Dann können wir Ihnen als Lösungsanbieter helfen:

          Wir wählen unsere Mitarbeiter sorgfältig aus und stimmen alle Fähigkeiten punktuell aufeinander ab, sodass Sie bei uns die folgende Kompetenzen aus einer Hand bekommen:

          Softwareentwicklung,
IT-Service-Management,
Change, Prozess- und Projektmanagement
Strategie- und Unternehmensberatung`
          }}
        ></ArticleCard>
      </Section>

      <Section backgroundColor='gray'>
        <VideoOverlapLandscape youTubeVideoId='QVArEtvAGsk'>
          <section class='flex flex-col space-y-4'>
            <h2 class='text-xl font-bold md:text-4xl'>
              <HeadingSegmentSecondary text='Eine Idee auf die Straße gebracht' />
            </h2>
            <p class='leading-7'>
              Wie arbeitet die Werkstatt von morgen? Mobil am und unterm Auto?
              Was wünschen sich die Kunden dieser Werkstätten? Soll der nächste
              freie Reifenwechseltermin sofort reserviert werden können? Wie
              unterscheiden sich die Bedarfe von PKW und NFZ? Bei unserem
              Partner, der Werbas GmbH, durften wir unsere Lösungskompetenz
              entlang der gesamten Wertschöpfungskette einbringen. Heraus kam
              das neue Werkstattmanagementsystem Werkstatt.NXT.
            </p>
            <LinkCallToAction
              href='https://www.werkstatt-nxt.com/'
              target='_blank'
            >
              Zu Werkstatt.NXT
            </LinkCallToAction>
          </section>
        </VideoOverlapLandscape>
      </Section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Lösungen',
  meta: [
    {
      name: 'description',
      content:
        'Von Softwareentwicklung über IT-Service-Management bis hin zu Change, Prozess- und Projektmanagement sowie Strategie- und Unternehmensberatung.'
    },
    {
      name: 'keywords',
      content:
        'Vollumfängliche Lösungen, Softwareentwicklung, IT-Service-Management, Change, Prozessmanagement, Projektmanagement, Strategie, Unternehmensberatung'
    }
  ],

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/solutions/header.webp',
          alt: 'Two team mates checking an App on the tablet.'
        },
        heading: 'Alles aus einer Hand',
        headingAccent: 'Vollumfänglich statt punktuell'
      }
    }
  }
};
