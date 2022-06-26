import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BackButtonComponent } from '@cp/ui';
import { Video } from '../career-recruiting-process-video.repository';

@Component({
  selector: 'cp-cinema-header',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './cinema-header.component.html',
  styleUrls: ['./cinema-header.component.scss'],
})
export class CinemaHeaderComponent {}
