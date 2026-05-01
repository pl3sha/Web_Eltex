import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Article } from '../../../models/article';

const DEFAULT_IMAGE = 'image/nature.jpg';

@Component({
  selector: 'app-article-form',
  imports: [FormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  @Output() submitArticle = new EventEmitter<Article>();
  @Output() cancel = new EventEmitter<void>();

  title = '';
  description = '';

  onSubmit(form: NgForm): void {
    const title = this.title.trim();
    const description = this.description.trim();
    if (!title || !description) return;

    this.submitArticle.emit({
      id: this.generateId(),
      title,
      description,
      date: new Date().toISOString().split('T')[0],
      image: DEFAULT_IMAGE,
    });

    form.resetForm();
  }

  onCancel(form: NgForm): void {
    form.resetForm();
    this.cancel.emit();
  }

  private generateId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
