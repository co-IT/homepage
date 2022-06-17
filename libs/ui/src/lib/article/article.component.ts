import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'cp-article[markdownSrc]',
  standalone: true,
  imports: [MarkdownModule, CallToActionComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() markdownSrc: string | undefined;
}
