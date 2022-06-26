import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { ArticleComponent } from '@cp/ui';
import { Video } from '../career-recruiting-process-video.repository';

@Component({
  selector: 'cp-cinema-player',
  templateUrl: './cinema-player.component.html',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, ArticleComponent],
  styleUrls: ['./cinema-player.component.scss'],
})
export class CinemaPlayerComponent {
  @Input() video: Video | undefined;
}
