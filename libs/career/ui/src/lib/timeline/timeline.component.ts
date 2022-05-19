import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Example:
 * <cp-timeline [entries]="" [entryTemplate]=entryTemplate></cp-timeline>
 *
 * <ng-template #entryTemplate let-entry>
 *   <span class="text-emphasized"></span>
 *   <span></span>
 * </ng-template>
 */
@Component({
  selector: 'cp-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  // source: https://codepen.io/TajShireen/pen/JjGvVzg
}
