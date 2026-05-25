import { Injectable, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';
import { ApiGraphqlArticle, ApiGraphqlComment } from '../../models/graphql-types';
import {
  ARTICLE_RATING_DOWN,
  ARTICLE_RATING_UP,
  COMMENT_RATING_DOWN,
  COMMENT_RATING_UP,
  CREATE_COMMENT,
  GET_POST,
} from './post.graphql';
import { IPostDataService, PostQueryResult } from './post-service.interface';
import { PostMapperService } from './post-mapper.service';
import { PostStoreService } from './post-store.service';

interface GetPostResponse {
  article: ApiGraphqlArticle | null;
  commentsByArticle: ApiGraphqlComment[];
}

@Injectable()
export class PostGraphqlService implements IPostDataService {
  private readonly apollo = inject(Apollo);
  private readonly mapper = inject(PostMapperService);
  private readonly store = inject(PostStoreService);

  fetchPost(id: string): Observable<PostQueryResult | null> {
    return this.apollo
      .query<GetPostResponse>({
        query: GET_POST,
        variables: { id },
        fetchPolicy: 'network-only',
      })
      .pipe(
        map((result) => {
          const data = result.data;
          const article = data?.article;
          if (!article) {
            return null;
          }
          return {
            article: this.mapper.toArticle(article),
            comments: (data?.commentsByArticle ?? []).map((item) =>
              this.mapper.toComment(item),
            ),
          };
        }),
      );
  }

  addComment(postId: string, comment: Comment): Observable<Comment[]> {
    return this.apollo
      .mutate<{ createComment: ApiGraphqlComment }>({
        mutation: CREATE_COMMENT,
        variables: {
          createComment: {
            articleId: postId,
            username: comment.authorName,
            content: comment.text,
          },
        },
      })
      .pipe(
        map((result) => {
          const created = result.data?.createComment;
          if (!created) {
            return this.store.comments();
          }
          const mapped = this.mapper.toComment(created);
          const updated = [mapped, ...this.store.comments().filter((c) => c.id !== mapped.id)];
          return updated;
        }),
      );
  }

  updateCommentRating(postId: string, commentId: string, delta: number): Observable<Comment[]> {
    const mutation = delta > 0 ? COMMENT_RATING_UP : COMMENT_RATING_DOWN;
    return this.apollo
      .mutate<{ commentRatingUp?: ApiGraphqlComment; commentRatingDown?: ApiGraphqlComment }>({
        mutation,
        variables: { id: commentId },
      })
      .pipe(
        map((result) => {
          const updatedComment = result.data?.commentRatingUp ?? result.data?.commentRatingDown;
          if (!updatedComment) {
            return this.store.comments();
          }
          return this.store
            .comments()
            .map((comment) =>
              comment.id === commentId
                ? { ...comment, rating: updatedComment.rating ?? comment.rating }
                : comment,
            );
        }),
      );
  }

  updateArticleRating(id: string, delta: number): Observable<Article> {
    const mutation = delta > 0 ? ARTICLE_RATING_UP : ARTICLE_RATING_DOWN;
    return this.apollo
      .mutate<{ articleRatingUp?: ApiGraphqlArticle; articleRatingDown?: ApiGraphqlArticle }>({
        mutation,
        variables: { id },
      })
      .pipe(
        map((result) => {
          const updated = result.data?.articleRatingUp ?? result.data?.articleRatingDown;
          const current = this.store.article();
          if (!updated || !current) {
            return current!;
          }
          return { ...current, rating: updated.rating ?? current.rating };
        }),
      );
  }
}
