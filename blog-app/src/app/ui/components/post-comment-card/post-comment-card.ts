import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-post-comment-card',
  imports: [
    DatePipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './post-comment-card.html',
  styleUrl: './post-comment-card.scss',
})
export class PostCommentCard {
  @Input({ required: true }) comment!: Comment;
  @Output() ratingChange = new EventEmitter<number>();

  onUp(): void {
    this.ratingChange.emit(1);
  }

  onDown(): void {
    this.ratingChange.emit(-1);
  }
}
