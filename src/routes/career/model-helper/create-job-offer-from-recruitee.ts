import type {
  JobOfferCompact,
  RecruiteeJobOfferDto,
  RecruiteeResponseDto
} from '../model';

export function createJobOffersFromRecruitee(
  recruiteeResponse: RecruiteeResponseDto | undefined | null
): JobOfferCompact[] {
  const recruiteeJobOffers = recruiteeResponse?.offers;

  if (!areJobOffers(recruiteeJobOffers)) {
    return [];
  }

  return recruiteeJobOffers.map(recruiteeJobOffer => ({
    title: recruiteeJobOffer.title,
    offerUrl: recruiteeJobOffer.careers_url,
    tags: recruiteeJobOffer.tags,
    location: recruiteeJobOffer.location
  }));
}

function areJobOffers(
  candidate: RecruiteeJobOfferDto[] | undefined | null
): candidate is RecruiteeJobOfferDto[] {
  return !!candidate && Array.isArray(candidate);
}
