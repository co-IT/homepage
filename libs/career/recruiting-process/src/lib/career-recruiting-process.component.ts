import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CallToActionComponent,
  PageTitleComponent,
  VideoTileComponent,
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';
import { CareerRecruitingProcessVideoRepository } from './career-recruiting-process-video.repository';
import { RecruitingVideoCollection } from './recruiting-video-collection';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    MarkdownModule,
    CallToActionComponent,
    PageTitleComponent,
    VideoTileComponent,
  ],
  providers: [CareerRecruitingProcessVideoRepository],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos: RecruitingVideoCollection;

  constructor(repository: CareerRecruitingProcessVideoRepository) {
    this.videos = repository.videos;
  }
}
