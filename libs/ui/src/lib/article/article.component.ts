import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { CallToActionButtonComponent } from '../call-to-action-button/call-to-action-button.component';

@Component({
  selector: 'cp-article[markdownSrc]',
  standalone: true,
  imports: [MarkdownModule, CallToActionButtonComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() markdownSrc: string | undefined;
}
