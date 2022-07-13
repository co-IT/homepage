import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CallToActionComponent,
  HeroTextComponent,
  JobOfferTileComponent,
  VideoTileComponent,
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { MarkdownModule } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { JobOffer, VideoCollectionGrouped } from './models';
import { RecruiteeService } from './recruitee.service';
import { RecruitingProcessVideoRepository } from './recruiting-process-video-repository.service';
import { RecruitingTimelineComponent } from './recruiting-timeline/recruiting-timeline.component';

@Component({
  selector: 'cp-recruiting-process',
  standalone: true,
  imports: [
    CallToActionComponent,
    CallToActionComponent,
    CommonModule,
    HeroTextComponent,
    HeroTextComponent,
    JobOfferTileComponent,
    MarkdownModule,
    RecruitingTimelineComponent,
    RouterModule,
    TranslocoModule,
    VideoTileComponent,
    VideoTileComponent,
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
    this.jobOffers$ = this.recruiteeService.getJobOffers();
  }

  protected preserveOriginalOrder() {
    return 0;
  }
}
