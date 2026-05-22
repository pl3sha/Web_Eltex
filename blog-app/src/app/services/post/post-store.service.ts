import { Injectable, signal } from '@angular/core';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

@Injectable({ providedIn: 'root' })
export class PostStoreService {
  readonly article = signal<Article | null>(null);
  readonly comments = signal<Comment[]>([]);

  setArticle(article: Article | null): void {
    this.article.set(article);
  }

  setComments(comments: Comment[]): void {
    this.comments.set(comments);
  }
}
