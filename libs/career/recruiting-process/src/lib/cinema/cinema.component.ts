import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { filter, map, Observable } from 'rxjs';
import { CinemaHeaderComponent } from '../cinema-header/cinema-header.component';
import { CinemaPlayerComponent } from '../cinema-player/cinema-player.component';
import { Video } from '../models';
import { RecruitingProcessVideoRepository } from '../recruiting-process-video-repository.service';
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
  providers: [RecruitingProcessVideoRepository],
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  video$: Observable<Video | undefined>;

  constructor(
    activatedRoute: ActivatedRoute,
    repository: RecruitingProcessVideoRepository,
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
