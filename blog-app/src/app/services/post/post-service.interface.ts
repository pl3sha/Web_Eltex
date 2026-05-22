import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

export interface PostQueryResult {
  readonly article: Article;
  readonly comments: Comment[];
}

export interface IPostDataService {
  fetchPost(id: string): Observable<PostQueryResult | null>;
  addComment(postId: string, comment: Comment): Observable<Comment[]>;
  updateCommentRating(postId: string, commentId: string, delta: number): Observable<Comment[]>;
  updateArticleRating(id: string, delta: number): Observable<Article>;
}
