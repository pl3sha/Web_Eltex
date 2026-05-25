import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-blog-article-card',
  imports: [DatePipe, RouterLink, MatIcon],
  templateUrl: './blog-article-card.html',
  styleUrl: './blog-article-card.scss',
})
export class BlogArticleCard {
  @Input({ required: true }) article!: Article;
  @Output() remove = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Article>();

  onRemove(event: Event): void {
    event.stopPropagation();
    this.remove.emit(this.article.id);
  }

  onEdit(event: Event): void {
    event.stopPropagation();
    this.edit.emit(this.article);
  }
}
