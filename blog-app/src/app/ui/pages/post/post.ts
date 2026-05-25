import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { environment } from '../../../../environments/environment';
import { Comment } from '../../../models/comment';
import {
  ArticleRatingChangedEvent,
  CommentCreatedEvent,
  CommentRatingChangedEvent,
} from '../../../models/websocket-events';
import { POST_DATA_SERVICE } from '../../../services/post/post-service.token';
import { PostStoreService } from '../../../services/post/post-store.service';
import { EventsWebSocketService } from '../../../services/websocket/events-websocket.service';
import { AuthStoreService } from '../../../services/auth/auth-store.service';
import { PostCommentCard } from '../../components/post-comment-card/post-comment-card';
import { PostCommentForm } from '../../components/post-comment-form/post-comment-form';

@Component({
  selector: 'app-post',
  imports: [DatePipe, MatIconButton, MatIcon, PostCommentCard, PostCommentForm],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly store = inject(PostStoreService);
  private readonly postData = inject(POST_DATA_SERVICE);
  private readonly eventsWs = inject(EventsWebSocketService);
  private readonly authStore = inject(AuthStoreService);

  private articleId: string | null = null;

  readonly article = this.store.article;
  readonly comments = this.store.comments;
  readonly isLoggedIn = this.authStore.isLoggedIn;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/blog']);
      return;
    }
    this.articleId = id;
    this.postData.fetchPost(id).subscribe((result) => {
      if (!result) {
        this.router.navigate(['/blog']);
        return;
      }
      this.store.setArticle(result.article);
      this.store.setComments(result.comments);
      this.title.setTitle(`${result.article.title} — Name-folio`);
    });
    this.initWebSocket(id);
  }

  ngOnDestroy(): void {
    if (this.articleId && environment.useWebSocket) {
      this.eventsWs.unsubscribeArticle(this.articleId);
      this.eventsWs.offAll();
      this.eventsWs.disconnect();
    }
  }

  onRatingUp(): void {
    const a = this.article();
    if (!a) {
      return;
    }
    this.postData.updateArticleRating(a.id, 1).subscribe((updated) => {
      this.store.setArticle(updated);
    });
  }

  onRatingDown(): void {
    const a = this.article();
    if (!a) {
      return;
    }
    this.postData.updateArticleRating(a.id, -1).subscribe((updated) => {
      this.store.setArticle(updated);
    });
  }

  onCommentRatingChange(commentId: string, delta: number): void {
    const a = this.article();
    if (!a) {
      return;
    }
    this.postData.updateCommentRating(a.id, commentId, delta).subscribe((updated) => {
      this.store.setComments(updated);
    });
  }

  onAddComment(comment: Comment): void {
    const a = this.article();
    if (!a) {
      return;
    }
    this.postData.addComment(a.id, comment).subscribe((updated) => {
      this.store.setComments(updated);
    });
  }

  onBack(): void {
    this.router.navigate(['/blog']);
  }

  private initWebSocket(articleId: string): void {
    if (!environment.useWebSocket) {
      return;
    }
    this.eventsWs.connect();
    this.eventsWs.onCommentCreated((event) => this.handleCommentCreated(event));
    this.eventsWs.onCommentRatingChanged((event) => this.handleCommentRatingChanged(event));
    this.eventsWs.onArticleRatingChanged((event) => this.handleArticleRatingChanged(event));
    this.eventsWs.subscribeArticle(articleId);
  }

  private handleCommentCreated(event: CommentCreatedEvent): void {
    const currentArticle = this.article();
    if (!currentArticle || event.payload.articleId !== currentArticle.id) {
      return;
    }
    const exists = this.comments().some((comment) => comment.id === event.payload.commentId);
    if (exists) {
      return;
    }
    const comment: Comment = {
      id: event.payload.commentId,
      authorName: event.payload.username,
      text: event.payload.content,
      date: event.payload.createdAt,
      rating: 0,
    };
    this.store.setComments([comment, ...this.comments()]);
  }

  private handleCommentRatingChanged(event: CommentRatingChangedEvent): void {
    const currentArticle = this.article();
    if (!currentArticle || event.payload.articleId !== currentArticle.id) {
      return;
    }
    this.store.setComments(
      this.comments().map((comment) =>
        comment.id === event.payload.commentId
          ? { ...comment, rating: event.payload.rating }
          : comment,
      ),
    );
  }

  private handleArticleRatingChanged(event: ArticleRatingChangedEvent): void {
    const currentArticle = this.article();
    if (!currentArticle || event.payload.articleId !== currentArticle.id) {
      return;
    }
    this.store.setArticle({ ...currentArticle, rating: event.payload.rating });
  }
}
