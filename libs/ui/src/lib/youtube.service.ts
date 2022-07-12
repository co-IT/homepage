import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class YoutubeService {
  private apiLoaded = false;

  loadIFrameApi(): void {
    if (this.apiLoaded) return;

    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.apiLoaded = true;
  }
}
