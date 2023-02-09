import { component$ } from '@builder.io/qwik';
import { JobOfferCard } from './job-offer-card';
import type { JobOffersGridProps } from './job-offers-grid.props';

export const JobOffersGrid = component$((props: JobOffersGridProps) => {
  return (
    <div class='grid gap-7 lg:grid-cols-2'>
      {props.jobOffers.map((jobOffer, index) => (
        <JobOfferCard jobOffer={jobOffer} key={index} />
      ))}
    </div>
  );
});
