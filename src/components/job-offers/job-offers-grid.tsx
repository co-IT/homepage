import { component$ } from '@builder.io/qwik';
import { LinkCallToAction } from '../link-call-to-action';
import type { JobOffersGridProps } from './job-offers-grid.props';

export const JobOffersGrid = component$((props: JobOffersGridProps) => {
  return (
    <div class="container mx-auto lg:flex flex-col gap-y-14 hidden">
      <div class="flex flex-col gap-y-4">
        <div class="bg-accent w-10 h-1" />

        <div class="text-4xl text-secondary font-bold leading-10">
          Unsere offenen Stellen
        </div>
      </div>

      <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-7">
        {props.jobOffers.map(jobOffer => (
          <div class="flex flex-col gap-y-4 rounded-xl border border-gray-300 p-6 min-w-fit">
            <div class="flex justify-between w-full gap-x-4">
              <div class="text-2xl text-secondary font-bold w-8/12">
                {jobOffer.title}
              </div>

              <div class="w-4/12 flex justify-end h-fit">
                <LinkCallToAction href={jobOffer.offerUrl} target="_blank">
                  Job ansehen
                </LinkCallToAction>
              </div>
            </div>

            <div>{jobOffer.location}</div>

            <div class="flex flex-row gap-2">
              {jobOffer.tags?.map(tag => (
                <span class="px-2 py-1 rounded-lg bg-secondary text-white text-sm font-bold leading-5">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
