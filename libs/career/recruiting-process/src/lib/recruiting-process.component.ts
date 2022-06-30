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
import { VideoCollectionGrouped } from './models';
import { RecruitingProcessVideoRepository } from './recruiting-process-video-repository.service';
import { RecruitingTimelineComponent } from './recruiting-timeline/recruiting-timeline.component';

@Component({
  selector: 'cp-recruiting-process',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslocoModule,
    MarkdownModule,
    CallToActionComponent,
    PageTitleComponent,
    VideoTileComponent,
    RecruitingTimelineComponent,
  ],
  providers: [RecruitingProcessVideoRepository],
  templateUrl: './recruiting-process.component.html',
  styleUrls: ['./recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos: VideoCollectionGrouped;

  constructor(repository: RecruitingProcessVideoRepository) {
    this.videos = repository.videos;
  }

  protected preserveOriginalOrder() {
    return 0;
  }
}
