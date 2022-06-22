import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TranslocoModule } from '@ngneat/transloco';
import { ArticleComponent } from '@cp/ui';

@Component({
  selector: 'cp-cinema',
  standalone: true,
  imports: [
    CommonModule,
    YouTubePlayerModule,
    TranslocoModule,
    ArticleComponent,
  ],
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  videoId$: Observable<string> = of('');
  apiLoaded = false;
  constructor(activatedRoute: ActivatedRoute) {
    this.videoId$ = activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('videoId') || '')
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
