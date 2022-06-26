import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';
import {
  CareerRecruitingProcessVideoRepository,
  Video,
} from '../career-recruiting-process-video.repository';
import { CinemaHeaderComponent } from '../cinema-header/cinema-header.component';
import { CinemaPlayerComponent } from '../cinema-player/cinema-player.component';

@Component({
  selector: 'cp-cinema',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    CinemaHeaderComponent,
    CinemaPlayerComponent,
  ],
  providers: [CareerRecruitingProcessVideoRepository],
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  video$: Observable<Video | undefined> = of({ id: '', title: '' });
  apiLoaded = false;
  constructor(
    activatedRoute: ActivatedRoute,
    repository: CareerRecruitingProcessVideoRepository
  ) {
    this.video$ = activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('videoId') || ''),
      map((videoId) => repository.find(videoId))
    );
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}