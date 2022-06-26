import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '@cp/ui';

@Component({
  selector: 'cp-cinema-header',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, RouterModule],
  templateUrl: './cinema-header.component.html',
  styleUrls: ['./cinema-header.component.scss'],
})
export class CinemaHeaderComponent {}
