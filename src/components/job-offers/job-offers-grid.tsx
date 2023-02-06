import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';
import type { JobOffersGridProps } from './job-offers-grid.props';

export const JobOffersGrid = component$((props: JobOffersGridProps) => {
  return (
    <div class='container mx-auto flex-col gap-y-14 lg:flex'>
      <div class='flex flex-col gap-y-4'>
        <div class='h-1 w-10 bg-accent' />

        <div class='text-secondary text-4xl font-bold leading-10'>
          Unsere offenen Stellen
        </div>
      </div>

      <div class='grid grid-flow-row-dense grid-cols-1 gap-7 lg:grid-cols-2'>
        {props.jobOffers.map(jobOffer => (
          <div class='flex min-w-fit flex-col gap-y-4 rounded-xl border border-gray-300 p-6'>
            <div class='flex w-full justify-between gap-x-4'>
              <div class='text-secondary w-8/12 text-2xl font-bold'>
                {jobOffer.title}
              </div>

              <div class='flex h-fit w-4/12 justify-end'>
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
    </div>
  );
});
