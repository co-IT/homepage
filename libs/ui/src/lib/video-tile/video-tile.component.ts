import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPlayButtonComponent } from '../video-play-button/video-play-button.component';
import { VideoTileIcon } from './video-tile-icon';

@Component({
  selector: 'cp-video-tile',
  standalone: true,
  imports: [NgIf, NgClass, RouterModule, VideoPlayButtonComponent],
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss'],
})
export class VideoTileComponent {
  @Input() label?: string;
  @Input() icon?: VideoTileIcon;

  @Input() videoDescription?: string;
  @Input() videoId?: string;

  @Input() appearance: 'blue' | 'green' | 'orange' = 'blue';
}
