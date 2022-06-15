import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cp-article[markdown]',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() markdownSrc: string | undefined;
}
