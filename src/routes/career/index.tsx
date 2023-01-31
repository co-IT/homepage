import { component$, Resource, useResource$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {} from '@builder.io/qwik-city';
import {
  JobOffersFallbackMessage,
  JobOffersGrid
} from '~/components/job-offers';
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
      title: 'Warum wir gegründet haben.',
      description: 'Lorem Ipsum'
    },
    {
      title: 'career.video.why.values',
      id: 'ChBHRdP2WNE',
      description: 'Lorem Ipsum'
    },
    {
      id: 'n26k-IpzZAY',
      title: 'career.video.why.orientation',
      description: 'Lorem Ipsum'
    },
    {
      id: '7trxOOr9Oys',
      title: 'career.video.why.solutions',
      description: 'Lorem Ipsum'
    },
    {
      id: 'v9KlP83Y73I',
      title: 'career.video.why.change',
      description: 'Lorem Ipsum'
    },
    {
      id: 'kQBu_XUbRpQ',
      title: 'career.video.why.understand-people',
      description: 'Lorem Ipsum'
    },
    {
      id: 'DE65AUyFI6E',
      title: 'career.video.why.origin',
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

// export const onGet: RequestHandler<JobOfferCompact[]> = async () => {
//   return fetch('https://coiteugmbh.recruitee.com/api/offers')
//     .then(response =>
//       response.ok
//         ? response.json()
//         : Promise.reject('Bad response fetching job offers from Recruitee.')
//     )
//     .then(json => createJobOffersFromRecruitee(json));
// };

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
