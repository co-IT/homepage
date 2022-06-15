import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '@cp/career/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-career-recruiting-process',
  standalone: true,
  imports: [TranslocoModule, PageTitleComponent],
  templateUrl: './career-recruiting-process.component.html',
  styleUrls: ['./career-recruiting-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerRecruitingProcessComponent {}
