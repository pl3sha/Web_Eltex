import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../models/websocket-events';
import { IEventsWebSocketService } from './events-websocket.interface';
import { NativeEventsService } from './native-events.service';
import { SocketIoEventsService } from './socket-io-events.service';

@Injectable({ providedIn: 'root' })
export class EventsWebSocketService implements IEventsWebSocketService {
  private readonly socketIo = inject(SocketIoEventsService);
  private readonly native = inject(NativeEventsService);

  private get active(): IEventsWebSocketService | null {
    if (!environment.useWebSocket) {
      return null;
    }
    return environment.websocketType === 'native' ? this.native : this.socketIo;
  }

  connect(): void {
    this.active?.connect();
  }

  disconnect(): void {
    this.active?.disconnect();
  }

  subscribeArticle(articleId: string): void {
    this.active?.subscribeArticle(articleId);
  }

  unsubscribeArticle(articleId: string): void {
    this.active?.unsubscribeArticle(articleId);
  }

  subscribeAll(): void {
    this.active?.subscribeAll();
  }

  onCommentCreated(handler: (event: CommentCreatedEvent) => void): void {
    this.active?.onCommentCreated(handler);
  }

  onCommentRatingChanged(handler: (event: CommentRatingChangedEvent) => void): void {
    this.active?.onCommentRatingChanged(handler);
  }

  onArticleRatingChanged(handler: (event: ArticleRatingChangedEvent) => void): void {
    this.active?.onArticleRatingChanged(handler);
  }

  offAll(): void {
    this.active?.offAll();
  }
}
