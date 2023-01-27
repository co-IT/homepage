import type { JobOffer } from '../model';
import type { JobOfferRecruiteeDto } from '../model/job-offer-recruitee.dto';

export function createJobOffersFromRecruitee(
  jobOffersRecruitee: JobOfferRecruiteeDto[] | undefined | null
): JobOffer[] {
  if (!jobOffersRecruitee || !Array.isArray(jobOffersRecruitee)) {
    return [];
  }

  return jobOffersRecruitee.map(jobOfferRecruitee => ({
    id: jobOfferRecruitee.id,
    title: jobOfferRecruitee.title,
    description: jobOfferRecruitee.description,
    city: jobOfferRecruitee.city,
    country: jobOfferRecruitee.country,
    applyUrl: jobOfferRecruitee.careers_apply_url,
    offerUrl: jobOfferRecruitee.careers_url,
    tags: jobOfferRecruitee.tags,
    location: jobOfferRecruitee.location,
    isRemote: jobOfferRecruitee.remote
  }));
}
