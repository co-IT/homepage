import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import {
  JobOffersFallbackMessage,
  JobOffersGrid
} from '~/components/job-offers';
import type { JobOfferCompact } from './model';
import { createJobOffersFromRecruitee } from './model-helper';

export const onGet: RequestHandler<JobOfferCompact[]> = async () => {
  const response = await fetch('https://coiteugmbh.recruitee.com/api/offers');

  if (!response.ok) {
    throw new Error('Bad response fetching job offers from Recruitee.');
  }

  const recruiteeResponse = await response.json();

  const h = createJobOffersFromRecruitee(recruiteeResponse);
  console.log(h);

  return h;
};

export default component$(() => {
  const jobOffers = useEndpoint<JobOfferCompact[]>();

  return (
    <>
      <Resource
        value={jobOffers}
        onResolved={jobOffers => <JobOffersGrid jobOffers={jobOffers} />}
        onRejected={() => <JobOffersFallbackMessage />}
      ></Resource>
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
