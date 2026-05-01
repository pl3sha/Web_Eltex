import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { ArticlesQueryResult, IArticlesDataService } from './articles-service.interface';
import { ArticlesStoreService } from './articles-store.service';

export const ARTICLES_PAGE_SIZE = 7;

const LS_ARTICLES = 'blog-articles';
const LS_PAGE = 'blog-active-page';

@Injectable()
export class ArticlesService implements IArticlesDataService {
  private readonly pageSize = ARTICLES_PAGE_SIZE;

  constructor(private readonly store: ArticlesStoreService) {}

  fetch(): Observable<ArticlesQueryResult> {
    const stored = this.store.articles();
    if (stored.length > 0) {
      return of(this.buildResult(stored, this.store.activePage()));
    }
    const all = this.readArticlesFromStorage();
    const savedPage = this.readPageFromStorage();
    const totalPages = Math.max(1, Math.ceil(all.length / this.pageSize));
    const page = all.length === 0 ? 1 : Math.min(Math.max(1, savedPage), totalPages);
    if (page !== savedPage) {
      this.writePageToStorage(page);
    }
    return of(this.buildResult(all, page));
  }

  add(article: Article): Observable<ArticlesQueryResult> {
    const all = [article, ...this.getAllFromStoreOrLs()];
    this.writeArticlesToStorage(all);
    const page = 1;
    this.writePageToStorage(page);
    return of(this.buildResult(all, page));
  }

  update(article: Article): Observable<ArticlesQueryResult> {
    const all = this.getAllFromStoreOrLs().map((a) => (a.id === article.id ? article : a));
    this.writeArticlesToStorage(all);
    let page = this.store.activePage();
    const totalPages = Math.max(1, Math.ceil(all.length / this.pageSize));
    page = all.length === 0 ? 1 : Math.min(Math.max(1, page), totalPages);
    this.writePageToStorage(page);
    return of(this.buildResult(all, page));
  }

  remove(id: string): Observable<ArticlesQueryResult> {
    const all = this.getAllFromStoreOrLs().filter((a) => a.id !== id);
    this.writeArticlesToStorage(all);
    let page = this.store.activePage();
    const totalPages = Math.max(1, Math.ceil(all.length / this.pageSize));
    page = all.length === 0 ? 1 : Math.min(page, totalPages);
    this.writePageToStorage(page);
    return of(this.buildResult(all, page));
  }

  goToPage(page: number): Observable<ArticlesQueryResult> {
    const all = this.getAllFromStoreOrLs();
    const totalPages = Math.max(1, Math.ceil(all.length / this.pageSize));
    const clamped = all.length === 0 ? 1 : Math.min(Math.max(1, page), totalPages);
    this.writePageToStorage(clamped);
    return of(this.buildResult(all, clamped));
  }

  private getAllFromStoreOrLs(): Article[] {
    const s = this.store.articles();
    if (s.length > 0) {
      return s.map((a) => ({ ...a }));
    }
    return this.readArticlesFromStorage();
  }

  private readArticlesFromStorage(): Article[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    try {
      const raw = localStorage.getItem(LS_ARTICLES);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as Article[]) : [];
    } catch {
      return [];
    }
  }

  private readPageFromStorage(): number {
    if (typeof localStorage === 'undefined') {
      return 1;
    }
    const raw = localStorage.getItem(LS_PAGE);
    if (!raw) {
      return 1;
    }
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n >= 1 ? n : 1;
  }

  private writeArticlesToStorage(articles: Article[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_ARTICLES, JSON.stringify(articles));
  }

  private writePageToStorage(page: number): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_PAGE, String(page));
  }

  private buildResult(all: Article[], activePage: number): ArticlesQueryResult {
    const start = (activePage - 1) * this.pageSize;
    const pageItems = all.slice(start, start + this.pageSize);
    return {
      articles: all,
      pageItems,
      total: all.length,
      activePage,
    };
  }
}
