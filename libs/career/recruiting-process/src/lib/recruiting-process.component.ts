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
import { JobOffer, VideoCollectionGrouped } from './models';
import { RecruitingProcessVideoRepository } from './recruiting-process-video-repository.service';
import { RecruitingTimelineComponent } from './recruiting-timeline/recruiting-timeline.component';
import { first, Observable } from 'rxjs';
import { RecruiteeService } from './recruitee.service';
import { JobOfferTileComponent } from '@cp/ui';

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
    JobOfferTileComponent,
  ],
  providers: [RecruitingProcessVideoRepository],
  templateUrl: './recruiting-process.component.html',
  styleUrls: ['./recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {
  videos: VideoCollectionGrouped;
  jobOffers$: Observable<JobOffer[]>;

  constructor(
    repository: RecruitingProcessVideoRepository,
    private recruiteeService: RecruiteeService
  ) {
    this.videos = repository.videos;
    this.jobOffers$ = this.recruiteeService.getJobOffers().pipe(first());
  }

  protected preserveOriginalOrder() {
    return 0;
  }
}
