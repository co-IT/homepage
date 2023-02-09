import { component$ } from '@builder.io/qwik';
import type { JobOfferCompact } from '../../routes/career/model';
import { LinkCallToAction } from '../link-call-to-action';

export interface JobOfferCardProps {
  jobOffer: JobOfferCompact;
}

export const JobOfferCard = component$((props: JobOfferCardProps) => {
  return (
    <div class='grid grid-cols-2 gap-y-4 rounded-xl border border-gray-300 p-6'>
      <h2 class='text-secondary text-2xl font-bold'>{props.jobOffer.title}</h2>

      <LinkCallToAction
        href={props.jobOffer.offerUrl}
        target='_blank'
        class='inline-flex h-fit justify-end'
      >
        Job ansehen
      </LinkCallToAction>

      <div class='col-span-2'>
        <span>{props.jobOffer.location}</span>

        <div class='flex flex-row gap-2'>
          {props.jobOffer.tags?.map(tag => (
            <span class='bg-secondary rounded-lg px-2 py-1 text-sm font-bold leading-5 text-white'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
