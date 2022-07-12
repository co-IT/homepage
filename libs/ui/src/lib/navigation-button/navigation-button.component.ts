import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HotkeysModule, HotkeysService } from '@ngneat/hotkeys';
import { TranslocoModule } from '@ngneat/transloco';
import { tap } from 'rxjs/operators';
import { NavigationService } from '../navigation/navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cp-navigation-button',
  templateUrl: './navigation-button.component.html',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HotkeysModule],
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent implements OnInit {
  isOpen = false;

  constructor(
    private navigationService: NavigationService,
    private hotkeys: HotkeysService
  ) {}

  ngOnInit() {
    this.navigationService.isOpen$
      .pipe(
        tap((isOpen) => (this.isOpen = isOpen)),
        untilDestroyed(this)
      )
      .subscribe();

    this.hotkeys
      .addShortcut({ keys: 'meta.k' })
      .pipe(
        tap(() => this.toggleNavigation()),
        untilDestroyed(this)
      )
      .subscribe();
  }

  toggleNavigation() {
    this.navigationService.setNavigationState(!this.isOpen);
  }
}
