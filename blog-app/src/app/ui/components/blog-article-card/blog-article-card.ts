import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-blog-article-card',
  imports: [DatePipe],
  templateUrl: './blog-article-card.html',
  styleUrl: './blog-article-card.scss',
})
export class BlogArticleCard {
  @Input({ required: true }) article!: Article;
  @Output() remove = new EventEmitter<string>();

  onRemove(): void {
    this.remove.emit(this.article.id);
  }
}
