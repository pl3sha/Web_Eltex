import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';
import { ApiGraphqlArticle, ApiGraphqlComment } from '../../models/graphql-types';
import { DEFAULT_ARTICLE_IMAGE } from '../articles/article-mapper.service';

@Injectable({ providedIn: 'root' })
export class PostMapperService {
  toArticle(api: ApiGraphqlArticle): Article {
    return {
      id: api.id,
      title: api.title,
      description: api.content,
      date: api.createdAt,
      image: api.imgSrc || DEFAULT_ARTICLE_IMAGE,
      rating: api.rating ?? 0,
    };
  }

  toComment(api: ApiGraphqlComment): Comment {
    return {
      id: api.id,
      authorName: api.username,
      text: api.content,
      date: api.createdAt,
      rating: api.rating ?? 0,
    };
  }
}
