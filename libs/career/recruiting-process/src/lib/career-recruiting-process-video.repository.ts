import { Injectable } from '@angular/core';
import { RecruitingVideoCollection } from './recruiting-video-collection';

@Injectable({ providedIn: 'root' })
export class CareerRecruitingProcessVideoRepository {
  videos: RecruitingVideoCollection = {
    why: {
      heading: 'recruiting-process.video.why.heading',
      videos: [
        {
          title: 'recruiting-process.video.why.founding',
          id: 'IZIduzPH9oU',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.values',
          id: 'ChBHRdP2WNE',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.orientation',
          id: 'n26k-IpzZAY',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.solutions',
          id: '7trxOOr9Oys',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.change',
          id: 'v9KlP83Y73I',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.understand-people',
          id: 'kQBu_XUbRpQ',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.why.origin',
          id: 'DE65AUyFI6E',
          icon: 'building',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.video.how.heading',
      videos: [
        {
          title: 'recruiting-process.video.how.your-development',
          id: 'ES6SMX18Zgs',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.comrades',
          id: 'eeRmNqLyhZM',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.higher-goal',
          id: 'HkKkJ-rBG0I',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.leadership',
          id: 'k2TDf0F3KI0',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.customer-orientation',
          id: 'iy5X7MVtIoI',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.how.networking',
          id: 'pqDwg2ny4fY',
          icon: 'building',
        },
      ],
    },
    what: {
      heading: 'recruiting-process.video.what.heading',
      videos: [
        {
          title: 'recruiting-process.video.what.salary-1',
          id: '2AceUlURmwY',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.what.salary-2',
          id: 'klWORYu1AKI',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.what.salary-3',
          id: 'MOEhmbz-1UY',
          icon: 'building',
        },
        {
          title: 'recruiting-process.video.what.contract',
          id: '2AceUlURmwY',
          icon: 'building',
        },
      ],
    },
  };

  find(id: string) {
    return [
      ...this.videos.how.videos,
      ...this.videos.what.videos,
      ...this.videos.why.videos,
    ].find((video) => video.id === id);
  }
}
