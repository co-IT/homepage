import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ArticleComponent,
  CallToActionComponent,
  PageTitleComponent,
  VideoTileComponent,
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    CallToActionComponent,
    PageTitleComponent,
    ArticleComponent,
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
          description: 'recruiting-process.video.why.founding',
          url: 'https://youtu.be/IZIduzPH9oU',
        },
        {
          description: 'recruiting-process.video.why.values',
          url: 'https://youtu.be/ChBHRdP2WNE',
        },
        {
          description: 'recruiting-process.video.why.orientation',
          url: 'https://youtu.be/n26k-IpzZAY',
        },
        {
          description: 'recruiting-process.video.why.solutions',
          url: 'https://youtu.be/7trxOOr9Oys',
        },
        {
          description: 'recruiting-process.video.why.change',
          url: 'https://youtu.be/v9KlP83Y73I',
        },
        {
          description: 'recruiting-process.video.why.understand-people',
          url: 'https://youtu.be/kQBu_XUbRpQ',
        },
        {
          description: 'recruiting-process.video.why.origin',
          url: 'https://youtu.be/DE65AUyFI6E',
        },
      ],
    },
    how: {
      heading: 'recruiting-process.heading.video-how',
      videos: [],
    },
    what: {
      heading: 'recruiting-process.heading.video-what',
      videos: [],
    },
  };
}
