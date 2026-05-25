import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../models/websocket-events';
import { IEventsWebSocketService } from './events-websocket.interface';

interface NativeWsIncoming {
  event: string;
  type?: string;
  payload?: CommentCreatedEvent['payload'] | CommentRatingChangedEvent['payload'] | ArticleRatingChangedEvent['payload'];
}

@Injectable({ providedIn: 'root' })
export class NativeEventsService implements IEventsWebSocketService {
  private ws: WebSocket | null = null;
  private readonly handlers = new Map<string, (event: unknown) => void>();

  connect(): void {
    if (!environment.useWebSocket || this.ws) {
      return;
    }
    try {
      this.ws = new WebSocket(environment.nativeWsUrl);
      this.ws.onmessage = (event) => {
        const message = JSON.parse(event.data as string) as NativeWsIncoming;
        const handler = this.handlers.get(message.event);
        if (!handler || !message.type || !message.payload) {
          return;
        }
        handler({ type: message.type, payload: message.payload });
      };
      this.ws.onerror = () => {
        this.ws = null;
      };
    } catch {
      this.ws = null;
    }
  }

  disconnect(): void {
    this.offAll();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  subscribeArticle(articleId: string): void {
    this.send('subscribe-article', articleId);
  }

  unsubscribeArticle(articleId: string): void {
    this.send('unsubscribe-article', articleId);
  }

  subscribeAll(): void {
    this.send('subscribe-all');
  }

  onCommentCreated(handler: (event: CommentCreatedEvent) => void): void {
    this.handlers.set('comment-created', handler as (event: unknown) => void);
  }

  onCommentRatingChanged(handler: (event: CommentRatingChangedEvent) => void): void {
    this.handlers.set('comment-rating-changed', handler as (event: unknown) => void);
  }

  onArticleRatingChanged(handler: (event: ArticleRatingChangedEvent) => void): void {
    this.handlers.set('article-rating-changed', handler as (event: unknown) => void);
  }

  offAll(): void {
    this.handlers.clear();
  }

  private send(event: string, data?: string): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return;
    }
    this.ws.send(JSON.stringify(data !== undefined ? { event, data } : { event }));
  }
}
