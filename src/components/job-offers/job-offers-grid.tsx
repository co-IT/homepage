import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';
import type { JobOffersGridProps } from './job-offers-grid.props';

export const JobOffersGrid = component$((props: JobOffersGridProps) => {
  return (
    <div class='grid grid-flow-row-dense grid-cols-1 gap-7 lg:grid-cols-2'>
      {props.jobOffers.map(jobOffer => (
        <div class='flex min-w-fit flex-col gap-y-4 rounded-xl border border-gray-300 p-6'>
          <div class='flex w-full justify-between gap-x-4'>
            <p class='text-secondary break-all text-2xl font-bold'>
              {jobOffer.title}
            </p>

            <div class='h-fit '>
              <LinkCallToAction href={jobOffer.offerUrl} target='_blank'>
                Job ansehen
              </LinkCallToAction>
            </div>
          </div>

          <div>{jobOffer.location}</div>

          <div class='flex flex-row gap-2'>
            {jobOffer.tags?.map(tag => (
              <span class='bg-secondary rounded-lg px-2 py-1 text-sm font-bold leading-5 text-white'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});
