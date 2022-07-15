import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { filter, map, Observable } from 'rxjs';
import { CinemaHeaderComponent } from './cinema-header/cinema-header.component';
import { CinemaPlayerComponent } from './cinema-player/cinema-player.component';
import { Video } from './models';
import { CareerVideoRepository } from '../career-page/career-video-repository.service';
import { YoutubeService } from '@cp/ui';

@Component({
  selector: 'cp-cinema',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    CinemaHeaderComponent,
    CinemaPlayerComponent,
  ],
  providers: [CareerVideoRepository],
  templateUrl: './cinema-page.component.html',
  styleUrls: ['./cinema-page.component.scss'],
})
export class CinemaPageComponent implements OnInit {
  video$: Observable<Video | undefined>;

  constructor(
    activatedRoute: ActivatedRoute,
    repository: CareerVideoRepository,
    private youtubeService: YoutubeService
  ) {
    this.video$ = activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('videoId')),
      filter((videoId: string | null): videoId is string => !!videoId),
      map((videoId) => repository.find(videoId))
    );
  }

  ngOnInit(): void {
    this.youtubeService.loadIFrameApi();
  }
}
