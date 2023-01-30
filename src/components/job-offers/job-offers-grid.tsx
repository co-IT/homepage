import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';
import type { JobOffersGridProps } from './job-offers-grid.props';

export const JobOffersGrid = component$((props: JobOffersGridProps) => {
  return (
    <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-7">
      {props.jobOffers.map(jobOffer => (
        <article class="rounded border border-gray-300 p-4 min-w-fit">
          <div class="flex">
            <h3>{jobOffer.title}</h3>
            <LinkCallToAction href={jobOffer.offerUrl} target="_blank">
              Job ansehen
            </LinkCallToAction>
          </div>

          <p>{jobOffer.location}</p>
          {jobOffer.tags?.map(tag => (
            <span>{tag}</span>
          ))}
        </article>
      ))}
    </div>
  );
});
