import { Injectable } from '@angular/core';
import { VideoCollectionGrouped } from './models';

@Injectable({ providedIn: 'root' })
export class CareerVideoRepository {
  videos: VideoCollectionGrouped = {
    why: {
      heading: 'career.video.why.heading',
      appearance: 'blue',
      videos: [
        {
          title: 'career.video.why.founding',
          id: 'IZIduzPH9oU',
          icon: 'building',
        },
        {
          title: 'career.video.why.values',
          id: 'ChBHRdP2WNE',
          icon: 'lifebelt',
        },
        {
          title: 'career.video.why.orientation',
          id: 'n26k-IpzZAY',
          icon: 'woman-man',
        },
        {
          title: 'career.video.why.solutions',
          id: '7trxOOr9Oys',
          icon: 'signpost',
        },
        {
          title: 'career.video.why.change',
          id: 'v9KlP83Y73I',
          icon: 'compass',
        },
        {
          title: 'career.video.why.understand-people',
          id: 'kQBu_XUbRpQ',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'career.video.why.origin',
          id: 'DE65AUyFI6E',
          icon: 'family',
        },
      ],
    },
    how: {
      heading: 'career.video.how.heading',
      appearance: 'green',
      videos: [
        {
          title: 'career.video.how.your-development',
          id: 'ES6SMX18Zgs',
          icon: 'building',
        },
        {
          title: 'career.video.how.comrades',
          id: 'eeRmNqLyhZM',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'career.video.how.higher-goal',
          id: 'HkKkJ-rBG0I',
          icon: 'compass',
        },
        {
          title: 'career.video.how.leadership',
          id: 'k2TDf0F3KI0',
          icon: 'signpost',
        },
        {
          title: 'career.video.how.customer-orientation',
          id: 'iy5X7MVtIoI',
          icon: 'family',
        },
        {
          title: 'career.video.how.networking',
          id: 'pqDwg2ny4fY',
          icon: 'woman-man',
        },
      ],
    },
    what: {
      heading: 'career.video.what.heading',
      appearance: 'orange',
      videos: [
        {
          title: 'career.video.what.salary-1',
          id: '2AceUlURmwY',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'career.video.what.salary-2',
          id: 'klWORYu1AKI',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'career.video.what.salary-3',
          id: 'MOEhmbz-1UY',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'career.video.what.contract',
          id: '2AceUlURmwY',
          icon: 'compass',
        },
      ],
    },
  };

  find(id: string) {
    return Object.entries(this.videos)
      .flatMap(([, value]) => value.videos)
      .find((video) => video.id === id);
  }
}
