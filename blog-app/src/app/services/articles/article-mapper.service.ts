import { Injectable } from '@angular/core';
import { ApiArticle, ApiArticlesResponse } from '../../models/api-article';
import { Article } from '../../models/article';
import { ArticlesQueryResult } from './articles-service.interface';

export const DEFAULT_ARTICLE_IMAGE = 'image/nature.jpg';

@Injectable({ providedIn: 'root' })
export class ArticleMapperService {
  toArticle(api: ApiArticle): Article {
    return {
      id: api.id,
      title: api.title,
      description: api.content,
      date: api.createdAt,
      image: api.imgSrc || DEFAULT_ARTICLE_IMAGE,
      rating: api.rating ?? 0,
      categoryId: api.categoryId ?? undefined,
    };
  }

  toQueryResult(response: ApiArticlesResponse, activePage: number): ArticlesQueryResult {
    const pageItems = response.items.map((item) => this.toArticle(item));
    return {
      articles: pageItems,
      pageItems,
      total: response.total,
      activePage,
    };
  }

  toFormData(article: Article, categoryId?: string): FormData {
    const formData = new FormData();
    formData.append('title', article.title);
    formData.append('content', article.description);
    if (categoryId) {
      formData.append('categoryId', categoryId);
    }
    if (article.imageFile) {
      formData.append('image', article.imageFile);
    }
    return formData;
  }
}
