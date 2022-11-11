import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CallToActionComponent,
  HeroTextComponent,
  JobOfferTileComponent,
  MarkdownComponent,
  VideoTileComponent
} from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { CareerVideoRepository } from './career-video-repository.service';
import { JobOffer, VideoCollectionGrouped } from './models';
import { RecruiteeService } from './recruitee.service';
import { RecruitingTimelineComponent } from './recruiting-timeline/recruiting-timeline.component';

@Component({
  selector: 'cp-career-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    KeyValuePipe,
    RouterLink,
    CallToActionComponent,
    HeroTextComponent,
    JobOfferTileComponent,
    MarkdownComponent,
    RecruitingTimelineComponent,
    TranslocoModule,
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
