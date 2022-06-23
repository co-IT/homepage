import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-cinema-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema-header.component.html',
  styleUrls: ['./cinema-header.component.css'],
})
export class CinemaHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
