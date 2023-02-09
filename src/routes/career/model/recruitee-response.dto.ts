import type { RecruiteeJobOfferDto } from './job-offer-recruitee.dto';

/*
 *
 * Represents information coming from
 * https://coiteugmbh.recruitee.com/api/offers
 *
 */
export interface RecruiteeResponseDto {
  offers: RecruiteeJobOfferDto[];
}
