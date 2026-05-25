import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiArticle, ApiArticlesResponse } from '../../models/api-article';
import { Article } from '../../models/article';
import { CategoryApiService } from '../categories/category.service';
import { ArticleMapperService } from './article-mapper.service';
import { ArticlesQueryResult, IArticlesDataService } from './articles-service.interface';
import { ArticlesStoreService } from './articles-store.service';
import { ARTICLES_PAGE_SIZE } from './articles.service';

@Injectable()
export class ArticlesApiService implements IArticlesDataService {
  private readonly pageSize = ARTICLES_PAGE_SIZE;

  constructor(
    private readonly http: HttpClient,
    private readonly store: ArticlesStoreService,
    private readonly mapper: ArticleMapperService,
    private readonly categoryService: CategoryApiService,
  ) {}

  fetch(): Observable<ArticlesQueryResult> {
    const page = this.store.activePage() || 1;
    return this.loadPage(page);
  }

  add(article: Article): Observable<ArticlesQueryResult> {
    return this.categoryService.resolveCategoryId(article.categoryName).pipe(
      switchMap((categoryId) => {
        const formData = this.mapper.toFormData(article, categoryId);
        return this.http.post<ApiArticle>(`${environment.apiUrl}/articles`, formData);
      }),
      switchMap(() => this.loadPage(1)),
    );
  }

  update(article: Article): Observable<ArticlesQueryResult> {
    const page = this.store.activePage();
    return this.categoryService.resolveCategoryId(article.categoryName).pipe(
      switchMap((categoryId) => {
        const formData = this.mapper.toFormData(article, categoryId);
        return this.http.patch<ApiArticle>(`${environment.apiUrl}/articles/${article.id}`, formData);
      }),
      switchMap(() => this.loadPage(page)),
    );
  }

  remove(id: string): Observable<ArticlesQueryResult> {
    const page = this.store.activePage();
    return this.http
      .delete(`${environment.apiUrl}/articles/${id}`)
      .pipe(switchMap(() => this.loadPage(page)));
  }

  goToPage(page: number): Observable<ArticlesQueryResult> {
    return this.loadPage(page);
  }

  private loadPage(page: number): Observable<ArticlesQueryResult> {
    return this.http
      .get<ApiArticlesResponse>(`${environment.apiUrl}/articles`, {
        params: {
          page: String(page),
          limit: String(this.pageSize),
        },
      })
      .pipe(
        switchMap((response) => {
          if (page > 1 && response.items.length === 0 && response.total > 0) {
            const lastPage = Math.max(1, Math.ceil(response.total / this.pageSize));
            if (lastPage !== page) {
              return this.loadPage(lastPage);
            }
          }
          return of(this.mapper.toQueryResult(response, page));
        }),
      );
  }
}
