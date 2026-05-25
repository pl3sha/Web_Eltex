import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../models/websocket-events';

export interface IEventsWebSocketService {
  connect(): void;
  disconnect(): void;
  subscribeArticle(articleId: string): void;
  unsubscribeArticle(articleId: string): void;
  subscribeAll(): void;
  onCommentCreated(handler: (event: CommentCreatedEvent) => void): void;
  onCommentRatingChanged(handler: (event: CommentRatingChangedEvent) => void): void;
  onArticleRatingChanged(handler: (event: ArticleRatingChangedEvent) => void): void;
  offAll(): void;
}
