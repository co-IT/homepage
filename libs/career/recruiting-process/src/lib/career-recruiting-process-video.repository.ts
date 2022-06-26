import { Injectable } from '@angular/core';

export interface Video {
  id: string;
  title: string;
}

export interface VideoCollection {
  heading: string;
  videos: Video[];
}

export interface RecruitingVideoCollection {
  why: VideoCollection;
  how: VideoCollection;
  what: VideoCollection;
}

@Injectable({ providedIn: 'root' })
export class CareerRecruitingProcessVideoRepository {
  videos = {
    why: {
      heading: 'recruiting-process.video.why.heading',
      videos: [
        {
          title: 'recruiting-process.video.why.founding',
          id: 'IZIduzPH9oU',
        },
        {
          title: 'recruiting-process.video.why.values',
          id: 'ChBHRdP2WNE',
        },
        {
          title: 'recruiting-process.video.why.orientation',
          id: 'n26k-IpzZAY',
        },
        {
          title: 'recruiting-process.video.why.solutions',
          id: '7trxOOr9Oys',
        },
        {
          title: 'recruiting-process.video.why.change',
          id: 'v9KlP83Y73I',
        },
        {
          title: 'recruiting-process.video.why.understand-people',
          id: 'kQBu_XUbRpQ',
        },
        {
          title: 'recruiting-process.video.why.origin',
          id: 'DE65AUyFI6E',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.video.how.heading',
      videos: [
        {
          title: 'recruiting-process.video.how.your-development',
          id: 'ES6SMX18Zgs',
        },
        {
          title: 'recruiting-process.video.how.comrades',
          id: 'eeRmNqLyhZM',
        },
        {
          title: 'recruiting-process.video.how.higher-goal',
          id: 'HkKkJ-rBG0I',
        },
        {
          title: 'recruiting-process.video.how.leadership',
          id: 'k2TDf0F3KI0',
        },
        {
          title: 'recruiting-process.video.how.customer-orientation',
          id: 'iy5X7MVtIoI',
        },
        {
          title: 'recruiting-process.video.how.networking',
          id: 'pqDwg2ny4fY',
        },
      ],
    },
    what: {
      heading: 'recruiting-process.video.what.heading',
      videos: [
        {
          title: 'recruiting-process.video.what.salary-1',
          id: '2AceUlURmwY',
        },
        {
          title: 'recruiting-process.video.what.salary-2',
          id: 'klWORYu1AKI',
        },
        {
          title: 'recruiting-process.video.what.salary-3',
          id: 'MOEhmbz-1UY',
        },
        {
          title: 'recruiting-process.video.what.contract',
          id: '2AceUlURmwY',
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
