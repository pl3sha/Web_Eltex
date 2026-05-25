import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-post-comment-form',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput, MatButton, MatIcon],
  templateUrl: './post-comment-form.html',
  styleUrl: './post-comment-form.scss',
})
export class PostCommentForm {
  @Output() submitComment = new EventEmitter<Comment>();

  readonly form = new FormBuilder().group({
    authorName: ['', [Validators.required]],
    text: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const comment: Comment = {
      id: crypto.randomUUID(),
      authorName: this.form.value.authorName!.trim(),
      text: this.form.value.text!.trim(),
      date: new Date().toISOString(),
      rating: 0,
    };
    this.submitComment.emit(comment);
    this.form.reset();
  }
}
