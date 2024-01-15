import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { ArticleSection } from '~/components/article-section';
import type { Article } from '~/components/article-section/model';
import { VideoOverlapLandscape } from '~/components/content-overlap';
import { HeadingSegmentSecondary } from '~/components/heading-segment';
import { MobilePhone } from '~/components/icons/mobile-phone';
import {
  JobOffersFallbackMessage,
  JobOffersGrid
} from '~/components/job-offers';
import { LinkCallToAction } from '~/components/link-call-to-action';
import { Section } from '~/components/section';
import { Timeline } from '~/components/timeline/timeline';
import { YouTubeVideoGrid } from '~/components/youtube';
import { createJobOffersFromRecruitee } from './model-helper';
import {
  videosWarumWirUnsereArbeitLieben,
  videosWasWirDirBieten,
  videosWieWirArbeiten
} from './resource';

export const useJobOffers = routeLoader$(async () => {
  const response = await fetch('https://coiteugmbh.recruitee.com/api/offers');

  const json = await (response.ok
    ? response.json()
    : Promise.reject('Bad response fetching job offers from Recruitee.'));

  return createJobOffersFromRecruitee(json);
});

export default component$(() => {
  const jobOffers = useJobOffers();

  const articles: Article[] = [
    {
      direction: 'right',
      image: {
        src: '/img/career/it-fascination.webp',
        alt: 'Two colleagues learning to together'
      },
      heading: 'Mach Deinen Beruf zur Berufung',
      text: 'Wir arbeiten, weil das Arbeiten selbst etwas Befriedigendes ist und weil das, was dabei herauskommt, für uns sinnvoll ist. Damit das funktioniert, sucht sich bei uns jeder seine Kunden und Projekte selbst aus. Du willst Routineaufgaben für Deine Kollegen automatisieren, um Tempo und Effizienz zu steigern? Sehr gern! Du möchtest lieber an unseren eigenen Produkten mitwirken, um neue Geschäftsfelder zu erschließen? Dann bring Deine Ideen ein! Dich reizt vor allem die Abwechslung? Dann unterstütze parallel mehrere Kunden in unterschiedlichen Branchen! Was in allen Fällen gleich bleibt: Du darfst Deine Talente ausschöpfen und eigene Vorstellungen realisieren. Wenn das zu Deinen Zielen passt, dann bewirb dich bei uns.'
    },
    {
      direction: 'left',
      image: {
        src: '/img/career/dinner-time.webp',
        alt: 'Two colleagues cooking together + enjoying a glass of red wine'
      },
      heading: 'Entdecke Kollegialität statt Stillstand',
      text: 'Menschen fühlen sich in Komfortzonen wohl, weil damit das Ausmaß an Veränderung reduziert wird. Die Dinge, die wir bereits kennen und können, empfinden wir als beruhigend und sicher. Doch die Welt um uns herum dreht sich weiter und der vermeintlich sichere Hafen wird zum Rückschritt. In unserem Team haben wir die Erfahrung gemacht, dass unser kollegiales Umfeld das beste und einzige Sicherheitsnetz ist, das wir brauchen. Dieses Netz fängt uns bei Rückschlägen auf, motiviert uns auf Durststrecken und sorgt dafür, dass wir auch schwierige Aufgaben mutig bewältigen. Also: Raus aus der Komfortzone und melde dich bei uns!'
    },
    {
      direction: 'right',
      image: {
        src: '/img/career/woman-controlling-a-boat.webp',
        alt: 'A team of three having a discussion about what they have achieved.'
      },
      heading: 'Übernimm Führung in hierarchielosen Netzwerken',
      text: 'Bei uns gibt es keine Hierarchien, keine disziplinarischen Führungsrollen und keine Abteilungssilos. Stattdessen setzen wir auf eine Kombination aus fluiden Netzwerken, empathischer Kommunikation, situativ-lateraler Führung und individuellen Soft Skill Coachings. Die Unternehmenskultur stellt die Leitplanken bereit, die wir brauchen, um eine gemeinsame Strategie zu entwickeln. Da ist es auch nichts Ungewöhnliches, dass uns ein linguistischer Psychologe besucht, um uns in wertschätzender Kommunikation zu schulen. Interessiert dich das? Erfahre mehr darüber in einem Gespräch mit uns.'
    },
    {
      direction: 'left',
      image: {
        src: '/img/career/man-climging-a-wall.webp',
        alt: 'The team taking a break enjoying fresh brewed espresso.'
      },
      heading: 'Bist Du wahnsinnig?',
      text: 'Wir sind es! Warum sonst treffen wir uns auf Teneriffa zum Angeln und auf Mallorca zum Kochen? Weshalb gibt es bei uns keine starren Budgets für Fortbildung, sondern ganzjährige, von Dir ausgewählte Coachings? Wieso hat jeder freie Einsicht in unsere Geschäftszahlen? Warum werden darin 3D Drucker, Drohne und Hochseeangeln gelistet? Was bewegt uns dazu, auch in eine bereits abgeschlossene Lösung noch einen Funken mehr Energie zu stecken? Entweder sind wir verrückt oder der Rest der Welt ist es. Beides ist möglich - und beides könnte der Grund dafür sein, dass Du so gut zu uns passt. Es gibt nur einen Weg, es herauszufinden: Bewirb dich und werde ein Teil unseres Teams!'
    }
  ];

  const recruitingProcessTimeLine = [
    {
      heading: 'Cultural Fit',
      text: 'Fordere lediglich mit Namen und Mailadresse unseren Fragebogen an.'
    },
    {
      heading: 'Bewerbungsunterlagen',
      text: 'Sofern Deine und unsere Werte und Wünsche zusammenpassen, fordern wir Deine Unterlagen an.'
    },
    {
      heading: 'Kennenlernen',
      text: 'Machen Deine Unterlagen Lust auf mehr, findet direkt ein Termin mit der Geschäftsführung statt.'
    },
    {
      heading: 'Fachliche Prüfung',
      text: 'Es folgen Termine zur fachlichen Eignungsprüfung. Bei Entwicklern sind das z.B. Programmieraufgaben.'
    },
    {
      heading: 'Eignungstest und Potenzialanalyse',
      text: 'Wissenschaftlich fundierte und objektive Verfahren geben Dir Sicherheit.'
    },
    {
      heading: 'Vertragsgespräch',
      text: 'Mit den Informationen aus den vorherigen zwei Schritten bieten wir ein hoffentlich zufriedenstellendes Gesamtpaket an.'
    }
  ];

  return (
    <>
      <Section>
        <ArticleSection articles={articles} />
      </Section>

      <VideoOverlapLandscape
        youTubeVideoId='STUlI6toSTA'
        class='container mx-auto'
      >
        <section class='flex flex-col space-y-4'>
          <h2 class='text-xl font-bold md:text-4xl'>
            <HeadingSegmentSecondary text='Erlebe Arbeiten ganz anders' />
          </h2>
          <p class='leading-7'>
            Gleichgesinnte statt Arbeitskollegen, Weiterentwicklung statt
            Komfortzone, Rückhalt geben statt wegzuducken: Wir verstehen
            Arbeitszeit als Lebenszeit! Wir wollen unsere Zeit nutzen, um
            Reibung und Bewegung zu erzeugen. Wirf einen Blick in unsere
            Kurzvorstellung und nimm Dir einen Moment für unser Video. Sprechen
            dich unsere Ansätze an? Dann kannst Du am Ende der Seite Deine
            Bewerbung starten, indem Du unseren Cultural Fit Fragebogen
            anforderst.
          </p>
          <LinkCallToAction
            href='https://e.co-it.eu/recruiting/kurzvorstellung'
            target='_blank'
          >
            Kurzvorstellung herunterladen
          </LinkCallToAction>
        </section>
      </VideoOverlapLandscape>

      <hr class='container mx-auto mt-10 lg:mt-20' />

      <Section>
        <div class='mx-auto mb-4 h-1 w-10 bg-primary'></div>
        <h2 class='text-secondary mb-14 text-center text-4xl font-bold'>
          Warum wir unsere Arbeit lieben
        </h2>
        <YouTubeVideoGrid videos={videosWarumWirUnsereArbeitLieben} />
      </Section>

      <Section>
        <div class='mx-auto mb-4 h-1 w-10 bg-primary'></div>
        <h2 class='text-secondary mb-14 text-center text-4xl font-bold'>
          Wie wir zusammenarbeiten
        </h2>
        <YouTubeVideoGrid videos={videosWieWirArbeiten} />
      </Section>

      <Section>
        <div class='mx-auto mb-4 h-1 w-10 bg-primary'></div>
        <h2 class='text-secondary mb-14 text-center text-4xl font-bold'>
          Was wir Dir bieten
        </h2>
        <YouTubeVideoGrid videos={videosWasWirDirBieten} />
      </Section>

      <Section>
        <div class='mb-14 flex flex-col items-center gap-y-4'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            So geht's weiter
          </h2>
        </div>

        <div class='grid grid-flow-col items-center gap-28'>
          <section class='hidden md:block'>
            <MobilePhone />
          </section>
          <section class='space-y-8'>
            <Timeline items={recruitingProcessTimeLine} />
            <div class='text-center md:text-left'>
              <LinkCallToAction
                href='https://e.co-it.eu/recruiting/process'
                target='_blank'
              >
                Mehr zum Bewerbungsverfahren
              </LinkCallToAction>
            </div>
          </section>
        </div>
      </Section>
      <Section>
        <div class='mb-14 flex flex-col items-center gap-y-4'>
          <div class='h-1 w-10 bg-primary' />

          <h2 class='text-secondary text-4xl font-bold leading-10 text-secondary-900'>
            Unsere offenen Stellen
          </h2>
        </div>
        <Resource
          value={jobOffers}
          onResolved={jobOffers => <JobOffersGrid jobOffers={jobOffers} />}
          onRejected={() => <JobOffersFallbackMessage />}
        />

        <section class='mt-16 grid place-items-center'>
          <LinkCallToAction
            href='https://karriere.co-it.eu/o/initiativbewerbung'
            target='_blank'
          >
            🚀 Bewirb Dich initiativ
          </LinkCallToAction>
        </section>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Karriere',
  meta: [
    {
      name: 'description',
      content:
        'Nichts zu lachen im Job? - Bei uns findest du dein Lächeln wieder!'
    },
    {
      name: 'keywords',
      content: 'Karriere, Job, Lächeln, Arbeitsplatz, Positiv, Bewerben'
    }
  ],

  frontmatter: {
    header: {
      type: 'content-page',
      configuration: {
        backgroundImage: {
          source: '/img/career/header.webp',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Geprägt durch Menschen',
        headingAccent: 'Arbeitszeit ist Lebenszeit',
        teaser:
          'Beschäftigung kommt von beschäftigt - und das ist zweifelslos jeder. Beruf kommt hingegen von Berufung und eine Berufung kann Dir so viel mehr bieten. Lies weiter und erfahre mehr.'
      }
    }
  }
};
