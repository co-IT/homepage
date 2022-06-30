import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JobOffer } from './models';

@Injectable({ providedIn: 'root' })
export class RecruiteeService {
  private baseUrl = 'https://coiteugmbh.recruitee.com/api';

  constructor(private http: HttpClient) {}

  getJobOffers(): Observable<JobOffer[]> {
    const url = `${this.baseUrl}/offers`;

    return this.http.get<RecruiteeOffersDto>(url).pipe(
      map((response) => response.offers),
      map((offers) =>
        offers.map((offer) => ({
          id: offer.id,
          title: offer.title,
          description: offer.description,
          city: offer.city,
          country: offer.country,
          applyUrl: offer.careers_apply_url,
          offerUrl: offer.careers_url,
          tags: offer.tags,
          location: offer.location,
          isRemote: offer.remote,
        }))
      )
    );
  }
}

interface RecruiteeOffersDto {
  offers: RecruiteeOfferDto[];
}

interface RecruiteeOfferDto {
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
