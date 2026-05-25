import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../models/websocket-events';
import { IEventsWebSocketService } from './events-websocket.interface';

@Injectable({ providedIn: 'root' })
export class SocketIoEventsService implements IEventsWebSocketService {
  private socket: Socket | null = null;

  connect(): void {
    if (!environment.useWebSocket || this.socket?.connected) {
      return;
    }
    try {
      this.socket = io(environment.websocketUrl, {
        transports: ['websocket', 'polling'],
        autoConnect: true,
      });
      this.socket.on('connect_error', () => undefined);
    } catch {
      this.socket = null;
    }
  }

  disconnect(): void {
    this.offAll();
    this.socket?.disconnect();
    this.socket = null;
  }

  subscribeArticle(articleId: string): void {
    this.socket?.emit('subscribe-article', articleId);
  }

  unsubscribeArticle(articleId: string): void {
    this.socket?.emit('unsubscribe-article', articleId);
  }

  subscribeAll(): void {
    this.socket?.emit('subscribe-all');
  }

  onCommentCreated(handler: (event: CommentCreatedEvent) => void): void {
    this.socket?.on('comment-created', handler);
  }

  onCommentRatingChanged(handler: (event: CommentRatingChangedEvent) => void): void {
    this.socket?.on('comment-rating-changed', handler);
  }

  onArticleRatingChanged(handler: (event: ArticleRatingChangedEvent) => void): void {
    this.socket?.on('article-rating-changed', handler);
  }

  offAll(): void {
    this.socket?.off('comment-created');
    this.socket?.off('comment-rating-changed');
    this.socket?.off('article-rating-changed');
  }
}
