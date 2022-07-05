import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JobOffer, RecruiteeOffersDto } from './models';

@Injectable({ providedIn: 'root' })
export class RecruiteeService {
  private baseUrl = 'https://coiteugmbh.recruitee.com/api';

  constructor(private http: HttpClient) {}

  getJobOffers(): Observable<JobOffer[]> {
    const url = `${this.baseUrl}/offers`;

    return this.http.get<RecruiteeOffersDto>(url).pipe(
      map(({ offers }) =>
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
