/*
 *
 * Represents information coming from
 * https://coiteugmbh.recruitee.com/api/offers
 *
 */
export interface JobOfferRecruiteeDto {
  description: string;
  country_code: string;
  tags: string[];
  city: string;
  careers_apply_url: string;
  state_code: string;
  education_code: string;
  created_at: string;
  id: number;
  max_hours: number;
  options_photo: string;
  options_phone: string;
  department: string;
  requirements: string;
  company_name: string;
  country: string;
  experience_code: string;
  slug: string;
  category_code: string;
  options_cover_letter: string;
  postal_code: string;
  position: number;
  title: string;
  location: string;
  remote: boolean;
  employment_type_code: string;
  published_at: string;
  options_cv: string;
  careers_url: string;
  mailbox_email: string;
  status: string;
  min_hours: number;
}
