import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { TranslocoModule } from '@ngneat/transloco';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'cp-solutions',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule, MarkdownModule, TranslocoModule],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  private apiLoaded = false;

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
