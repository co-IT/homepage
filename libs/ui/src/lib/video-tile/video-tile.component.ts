import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoPlayButtonComponent } from '../video-play-button/video-play-button.component';

@Component({
  selector: 'cp-video-tile',
  standalone: true,
  imports: [CommonModule, VideoPlayButtonComponent],
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss'],
})
export class VideoTileComponent {
  @Input() label?: string;
  @Input() videoDescription?: string;
  @Input() videoUrl?: string;
}
