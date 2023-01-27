import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import type { JobOffer } from './model';
import { createJobOffersFromRecruitee } from './model-helper';

export const onGet: RequestHandler<JobOffer[]> = async () => {
  const response = await fetch('https://coiteugmbh.recruitee.com/api/offers');

  if (!response.ok) {
    throw new Error('Bad response fetching job offers from Recruitee.');
  }

  const jobOffersFromRecruitee = await response.json();

  return createJobOffersFromRecruitee(jobOffersFromRecruitee);
};

export default component$(() => {
  const jobOffers = useEndpoint<JobOffer[]>();

  return (
    <>
      <Resource
        value={jobOffers}
        onResolved={jobOffers => (
          <>
            {jobOffers.map(jobOffer => (
              <div>{jobOffer.title}</div>
            ))}
          </>
        )}
        onRejected={() => (
          <p>
            Please check our Job-Offers
            <a href="https://karriere.co-it.eu" target="_blank">
              here
            </a>
            .
          </p>
        )}
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
