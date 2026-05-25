import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { POST_DATA_SERVICE } from '../../../services/post/post-service.token';
import { PostStoreService } from '../../../services/post/post-store.service';
import { Comment } from '../../../models/comment';
import { PostCommentCard } from '../../components/post-comment-card/post-comment-card';
import { PostCommentForm } from '../../components/post-comment-form/post-comment-form';

@Component({
  selector: 'app-post',
  imports: [DatePipe, MatIconButton, MatIcon, PostCommentCard, PostCommentForm],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly store = inject(PostStoreService);
  private readonly postData = inject(POST_DATA_SERVICE);

  readonly article = this.store.article;
  readonly comments = this.store.comments;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/blog']);
      return;
    }
    this.postData.fetchPost(id).subscribe((result) => {
      if (!result) {
        this.router.navigate(['/blog']);
        return;
      }
      this.store.setArticle(result.article);
      this.store.setComments(result.comments);
      this.title.setTitle(`${result.article.title} — Name-folio`);
    });
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
}
