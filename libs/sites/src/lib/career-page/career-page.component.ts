import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {
  CallToActionComponent,
  HeroTextComponent,
  JobOfferTileComponent,
  MarkdownComponent,
  VideoTileComponent,
  YoutubeService
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
    YouTubePlayerModule,
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
export class CareerPageComponent implements OnInit {
  videos: VideoCollectionGrouped;
  jobOffers$: Observable<JobOffer[]>;

  constructor(
    private readonly youtubeService: YoutubeService,
    repository: CareerVideoRepository,
    private readonly recruiteeService: RecruiteeService
  ) {
    this.videos = repository.videos;
    this.jobOffers$ = this.recruiteeService.getJobOffers();
  }

  ngOnInit(): void {
    this.youtubeService.loadIFrameApi();
  }

  preserveOriginalOrder() {
    return 0;
  }
}

