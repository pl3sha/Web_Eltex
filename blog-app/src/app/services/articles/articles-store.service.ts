import { Injectable, signal } from '@angular/core';
import { Article } from '../../models/article';

@Injectable({ providedIn: 'root' })
export class ArticlesStoreService {
  readonly articles = signal<Article[]>([]);
  readonly activePage = signal(1);

  setArticles(articles: Article[]): void {
    this.articles.set(articles);
  }

  setActivePage(page: number): void {
    this.activePage.set(page);
  }
}
