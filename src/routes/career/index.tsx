import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import {
  JobOffersFallbackMessage,
  JobOffersGrid
} from '~/components/job-offers';
import type { YouTubeVideo } from '~/components/youtube';
import { YouTubeVideoGrid } from '~/components/youtube';
import type { JobOfferCompact } from './model';
import { createJobOffersFromRecruitee } from './model-helper';

export default component$(() => {
  const jobOffers = useEndpoint<JobOfferCompact[]>();

  const youtubeVideos: YouTubeVideo[] = [
    {
      id: 'IZIduzPH9oU',
      title: 'Warum wir gegründet haben.',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.values',
      id: 'ChBHRdP2WNE',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.orientation',
      id: 'n26k-IpzZAY',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.solutions',
      id: '7trxOOr9Oys',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.change',
      id: 'v9KlP83Y73I',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.understand-people',
      id: 'kQBu_XUbRpQ',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.origin',
      id: 'DE65AUyFI6E',
      description: 'Lorem Ipsum'
    }
  ];

  return (
    <>
      <YouTubeVideoGrid videos={youtubeVideos} />
      <hr />
      <Resource
        value={jobOffers}
        onResolved={jobOffers => <JobOffersGrid jobOffers={jobOffers} />}
        onRejected={() => <JobOffersFallbackMessage />}
      ></Resource>
    </>
  );
});

export const onGet: RequestHandler<JobOfferCompact[]> = async () => {
  return fetch('https://coiteugmbh.recruitee.com/api/offers')
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject('Bad response fetching job offers from Recruitee.')
    )
    .then(json => createJobOffersFromRecruitee(json));
};

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
