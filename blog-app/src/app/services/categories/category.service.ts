import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Category } from '../../models/category';

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
  private readonly http = inject(HttpClient);

  fetchAll(): Observable<Category[]> {
    if (!environment.useBackend) {
      return of([]);
    }
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`);
  }

  create(name: string): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, { name });
  }

  resolveCategoryId(name: string | undefined): Observable<string | undefined> {
    const trimmed = name?.trim();
    if (!trimmed) {
      return of(undefined);
    }
    return this.fetchAll().pipe(
      switchMap((categories) => {
        const existing = categories.find(
          (category) => category.name.toLowerCase() === trimmed.toLowerCase(),
        );
        if (existing) {
          return of(existing.id);
        }
        return this.create(trimmed).pipe(map((category) => category.id));
      }),
    );
  }
}
