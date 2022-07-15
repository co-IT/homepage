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
import { CareerVideoRepository } from './career-video-repository.service';
import { RecruitingTimelineComponent } from './recruiting-timeline/recruiting-timeline.component';

@Component({
  selector: 'cp-career-page',
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
  providers: [CareerVideoRepository],
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerPageComponent {
  videos: VideoCollectionGrouped;
  jobOffers$: Observable<JobOffer[]>;

  constructor(
    repository: CareerVideoRepository,
    private recruiteeService: RecruiteeService
  ) {
    this.videos = repository.videos;
    this.jobOffers$ = this.recruiteeService.getJobOffers();
  }

  preserveOriginalOrder() {
    return 0;
  }
}
