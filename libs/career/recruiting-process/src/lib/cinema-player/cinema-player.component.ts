import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { MarkdownModule } from 'ngx-markdown';
import { Video } from '../video';

@Component({
  selector: 'cp-cinema-player',
  templateUrl: './cinema-player.component.html',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, MarkdownModule],
  styleUrls: ['./cinema-player.component.scss'],
})
export class CinemaPlayerComponent {
  @Input() video: Video | undefined;
}
