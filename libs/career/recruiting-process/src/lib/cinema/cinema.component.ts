import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-cinema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
})
export class CinemaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
