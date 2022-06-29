import { Injectable } from '@angular/core';
import { VideoCollectionGrouped } from './models';

@Injectable({ providedIn: 'root' })
export class CareerRecruitingProcessVideoRepository {
  videos: VideoCollectionGrouped = {
    why: {
      heading: 'recruiting-process.video.why.heading',
      appearance: 'blue',
      videos: [
        {
          title: 'recruiting-process.video.why.founding',
          id: 'IZIduzPH9oU',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.values',
          id: 'ChBHRdP2WNE',
          icon: 'lifebelt',
        },
        {
          title: 'recruiting-process.video.why.orientation',
          id: 'n26k-IpzZAY',
          icon: 'woman-man',
        },
        {
          title: 'recruiting-process.video.why.solutions',
          id: '7trxOOr9Oys',
          icon: 'signpost',
        },
        {
          title: 'recruiting-process.video.why.change',
          id: 'v9KlP83Y73I',
          icon: 'compass',
        },
        {
          title: 'recruiting-process.video.why.understand-people',
          id: 'kQBu_XUbRpQ',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'recruiting-process.video.why.origin',
          id: 'DE65AUyFI6E',
          icon: 'family',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.video.how.heading',
      appearance: 'green',
      videos: [
        {
          title: 'recruiting-process.video.how.your-development',
          id: 'ES6SMX18Zgs',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.comrades',
          id: 'eeRmNqLyhZM',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'recruiting-process.video.how.higher-goal',
          id: 'HkKkJ-rBG0I',
          icon: 'compass',
        },
        {
          title: 'recruiting-process.video.how.leadership',
          id: 'k2TDf0F3KI0',
          icon: 'signpost',
        },
        {
          title: 'recruiting-process.video.how.customer-orientation',
          id: 'iy5X7MVtIoI',
          icon: 'family',
        },
        {
          title: 'recruiting-process.video.how.networking',
          id: 'pqDwg2ny4fY',
          icon: 'woman-man',
        },
      ],
    },
    what: {
      heading: 'recruiting-process.video.what.heading',
      appearance: 'orange',
      videos: [
        {
          title: 'recruiting-process.video.what.salary-1',
          id: '2AceUlURmwY',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'recruiting-process.video.what.salary-2',
          id: 'klWORYu1AKI',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'recruiting-process.video.what.salary-3',
          id: 'MOEhmbz-1UY',
          icon: 'hand-holds-diamond',
        },
        {
          title: 'recruiting-process.video.what.contract',
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
