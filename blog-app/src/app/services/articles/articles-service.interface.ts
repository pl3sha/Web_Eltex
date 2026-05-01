import { Observable } from 'rxjs';
import { Article } from '../../models/article';

export interface ArticlesQueryResult {
  readonly articles: Article[];
  readonly pageItems: Article[];
  readonly total: number;
  readonly activePage: number;
}

export interface IArticlesDataService {
  fetch(): Observable<ArticlesQueryResult>;
  add(article: Article): Observable<ArticlesQueryResult>;
  update(article: Article): Observable<ArticlesQueryResult>;
  remove(id: string): Observable<ArticlesQueryResult>;
  goToPage(page: number): Observable<ArticlesQueryResult>;
}
