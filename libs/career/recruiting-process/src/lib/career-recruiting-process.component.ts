import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CallToActionComponent, VideoTileComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    MarkdownModule,
    CallToActionComponent,
    VideoTileComponent,
  ],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos = {
    why: {
      heading: 'recruiting-process.video.why.heading',
      videos: [
        {
          title: 'recruiting-process.video.why.founding',
          url: 'https://youtu.be/IZIduzPH9oU',
        },
        {
          title: 'recruiting-process.video.why.values',
          url: 'https://youtu.be/ChBHRdP2WNE',
        },
        {
          title: 'recruiting-process.video.why.orientation',
          url: 'https://youtu.be/n26k-IpzZAY',
        },
        {
          title: 'recruiting-process.video.why.solutions',
          url: 'https://youtu.be/7trxOOr9Oys',
        },
        {
          title: 'recruiting-process.video.why.change',
          url: 'https://youtu.be/v9KlP83Y73I',
        },
        {
          title: 'recruiting-process.video.why.understand-people',
          url: 'https://youtu.be/kQBu_XUbRpQ',
        },
        {
          title: 'recruiting-process.video.why.origin',
          url: 'https://youtu.be/DE65AUyFI6E',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.video.how.heading',
      videos: [
        {
          title: 'recruiting-process.video.how.your-development',
          url: 'https://youtu.be/ES6SMX18Zgs',
        },
        {
          title: 'recruiting-process.video.how.comrades',
          url: 'https://youtu.be/eeRmNqLyhZM',
        },
        {
          title: 'recruiting-process.video.how.higher-goal',
          url: 'https://youtu.be/HkKkJ-rBG0I',
        },
        {
          title: 'recruiting-process.video.how.leadership',
          url: 'https://youtu.be/k2TDf0F3KI0',
        },
        {
          title: 'recruiting-process.video.how.customer-orientation',
          url: 'https://youtu.be/iy5X7MVtIoI',
        },
        {
          title: 'recruiting-process.video.how.networking',
          url: 'https://youtu.be/pqDwg2ny4fY',
        },
      ],
    },
    what: {
      heading: 'recruiting-process.video.what.heading',
      videos: [
        {
          title: 'recruiting-process.video.what.salary-1',
          url: 'https://youtu.be/2AceUlURmwY',
        },
        {
          title: 'recruiting-process.video.what.salary-2',
          url: 'https://youtu.be/klWORYu1AKI',
        },
        {
          title: 'recruiting-process.video.what.salary-3',
          url: 'https://youtu.be/MOEhmbz-1UY',
        },
        {
          title: 'recruiting-process.video.what.contract',
          url: 'https://youtu.be/2AceUlURmwY',
        },
      ],
    },
  };
}
