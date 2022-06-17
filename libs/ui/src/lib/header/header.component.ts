import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionButtonComponent } from '../call-to-action-button/call-to-action-button.component';

@Component({
  selector: 'cp-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
