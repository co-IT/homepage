import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {} from '@builder.io/qwik-city';
import {
  JobOffersFallbackMessage,
  JobOffersGrid
} from '~/components/job-offers';
import { SectionArea } from '~/components/section-area';
import type { YouTubeVideo } from '~/components/youtube';
import { YouTubeVideoGrid } from '~/components/youtube';
import { VideoOverlapLandscape } from '../../components/content-overlap';
import { HeadingSegmentSecondary } from '../../components/heading-segment';
import { MobilePhone } from '../../components/icons/mobile-phone';
import { LinkCallToAction } from '../../components/link-call-to-action';
import { Timeline } from '../../components/timeline/timeline';
import { createJobOffersFromRecruitee } from './model-helper';

export default component$(() => {
  const jobOffers = useResource$(() => {
    return fetch('https://coiteugmbh.recruitee.com/api/offers')
      .then(response =>
        response.ok
          ? response.json()
          : Promise.reject('Bad response fetching job offers from Recruitee.')
      )
      .then(json => createJobOffersFromRecruitee(json));
  });

  const recruitingProcessTimeLine = [
    {
      heading: 'Cultural Fit',
      text: 'Fordere lediglich mit Namen und Mailadresse unseren Fragebogen an.'
    },
    {
      heading: 'Bewerbungsunterlagen',
      text: 'Sofern deine und unsere Werte und Wünsche zusammenpassen, fordern wir deine Unterlagen an.'
    },
    {
      heading: 'Kennenlernen',
      text: 'Machen deine Unterlagen Lust auf mehr, findet direkt ein Termin mit der Geschäftsführung statt.'
    },
    {
      heading: 'Fachliche Prüfung',
      text: 'Es folgen Termine zur fachlichen Eignungsprüfung. Bei Entwicklern sind das z.B. Programmieraufgaben.'
    },
    {
      heading: 'Eignungstest und Potenzialanalyse',
      text: 'Wissenschaftlich fundierte und objektive Verfahren geben dir Sicherheit.'
    },
    {
      heading: 'Vertragsgespräch',
      text: 'Mit den Informationen aus den vorherigen zwei Schritten bieten wir ein hoffentlich zufriedenstellendes Gesamtpaket an.'
    }
  ];

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: 'IZIduzPH9oU',
      title: 'Wir sind Teil einer Unternehmenfamilie',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/entwickle-dich-mit-uns-weiter.avif'
    },
    {
      title: 'Finde Kameraden in unserer kollegialen Kultur',
      id: 'ChBHRdP2WNE',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/erlebe-moderne-menschenzentrierte-führung.avif'
    },
    {
      id: 'n26k-IpzZAY',
      title: 'Erreiche mit uns gemeinsam die ganz großen Ziele',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/erreiche-mit-uns-gemeinsam-die-ganz-grossen-ziele.avif'
    },
    {
      id: '7trxOOr9Oys',
      title: 'Erlebe moderne, menschenzentrierte Führung',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/finde-kameraden-in-unserer-kollegialen-kultur.avif'
    },
    {
      id: 'v9KlP83Y73I',
      title: 'Schaffe nutzerorientierte Prozesse mit uns',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/schaffe-nutzerorientierte-prozesse.avif'
    },
    {
      id: 'kQBu_XUbRpQ',
      title: 'Tausche dich in unserem Netzwerk aus',
      description: 'Lorem Ipsum',
      thumb:
        '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/tausche-dich-in-unserem-netzwerk-aus.avif'
    }
  ];

  return (
    <section class='space-y-12'>
      <SectionArea>
        <VideoOverlapLandscape youTubeVideoId='STUlI6toSTA'>
          <section class='flex flex-col space-y-4'>
            <h2 class='font-bold text-xl md:text-4xl'>
              <HeadingSegmentSecondary text='Wir geben dir Halt' />
            </h2>
            <p class='leading-7'>
              Beschäftigung kommt von beschäftigt - und das ist zweifelslos
              jeder. Beruf kommt hingegen von Berufung und eine Berufung kann
              dir so viel mehr bieten: Gleichgesinnte statt Arbeitskollegen,
              Weiterentwicklung statt Komfortzone, Rückhalt statt Wegducken. Wir
              verstehen Arbeitszeit als Lebenszeit, die wir nutzen wollen, um
              Reibung und Bewegung zu erzeugen. Wirf einen Blick in unsere
              Kurzvorstellung und nimm dir eine Minute für unser Video oben.
              Sprechen dich unsere Ideen an? Dann kannst du am Ende der Seite
              deine Bewerbung starten, indem du unseren Cultural Fit Fragebogen
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
      </SectionArea>

      <SectionArea>
        <YouTubeVideoGrid videos={youtubeVideos} />
      </SectionArea>

      <SectionArea>
        <div class='flex flex-col items-center gap-y-4 mb-14'>
          <div class='bg-accent w-10 h-1' />

          <h2 class='text-secondary-900 text-4xl text-secondary font-bold leading-10'>
            So geht's weiter
          </h2>
        </div>

        <div class='grid grid-flow-col gap-28 items-center'>
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
      </SectionArea>

      <SectionArea>
        <Resource
          value={jobOffers}
          onResolved={jobOffers => <JobOffersGrid jobOffers={jobOffers} />}
          onRejected={() => <JobOffersFallbackMessage />}
        />
      </SectionArea>
    </section>
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
          source: '/img/career/header.avif',
          alt: 'Three team members enjoying engineering.'
        },
        heading: 'Geprägt durch Menschen',
        headingAccent: 'Arbeitszeit ist Lebenszeit',
        teaser:
          'Wir wünschen uns eine offene und ehrliche Zusammenarbeit. Uns ist es daher wichtig Ihnen transparent zu kommunizieren, was unsere Identität ausmacht, was uns motiviert für Sie unser Bestes zu geben und wie wir mit Ihnen gemeinsam Herausforderungen angehen wollen.'
      }
    }
  }
};
