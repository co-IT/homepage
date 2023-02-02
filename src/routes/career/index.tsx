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

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: 'IZIduzPH9oU',
      title: 'Wir sind Teil einer Unternehmenfamilie',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/entwickle-dich-mit-uns-weiter.avif'
    },
    {
      title: 'Finde Kameraden in unserer kollegialen Kultur',
      id: 'ChBHRdP2WNE',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/erlebe-moderne-menschenzentrierte-führung.avif'
    },
    {
      id: 'n26k-IpzZAY',
      title: 'Erreiche mit uns gemeinsam die ganz großen Ziele',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/erreiche-mit-uns-gemeinsam-die-ganz-grossen-ziele.avif'
    },
    {
      id: '7trxOOr9Oys',
      title: 'Erlebe moderne, menschenzentrierte Führung',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/finde-kameraden-in-unserer-kollegialen-kultur.avif'
    },
    {
      id: 'v9KlP83Y73I',
      title: 'Schaffe nutzerorientierte Prozesse mit uns',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/schaffe-nutzerorientierte-prozesse.avif'
    },
    {
      id: 'kQBu_XUbRpQ',
      title: 'Tausche dich in unserem Netzwerk aus',
      description: 'Lorem Ipsum',
      thumb: '/img/career/video-thumbnails/wie-wir-zusammen-arbeiten/tausche-dich-in-unserem-netzwerk-aus.avif'
    }
  ];

  return (
    <>
      <SectionArea backgroundColor='white'>
        <YouTubeVideoGrid videos={youtubeVideos} />
      </SectionArea>

      <Resource
        value={jobOffers}
        onResolved={jobOffers => <JobOffersGrid jobOffers={jobOffers} />}
        onRejected={() => <JobOffersFallbackMessage />}
      />
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
