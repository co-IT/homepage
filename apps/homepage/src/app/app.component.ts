import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cp-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
