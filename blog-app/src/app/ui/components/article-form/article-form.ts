import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  inject,
  input,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article } from '../../../models/article';

const DEFAULT_IMAGE = 'image/nature.jpg';

@Component({
  selector: 'app-article-form',
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  readonly editingArticle = input<Article | null>(null);

  @Input({ transform: booleanAttribute })
  set locked(value: boolean) {
    this._locked = value;
    if (value) {
      this.form.disable({ emitEvent: false });
    } else {
      this.form.enable({ emitEvent: false });
    }
  }

  get locked(): boolean {
    return this._locked;
  }

  private _locked = false;

  @Output() submitArticle = new EventEmitter<Article>();
  @Output() cancel = new EventEmitter<void>();

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(25)]],
    description: ['', [Validators.required]],
  });

  get titleCtrl() {
    return this.form.controls.title;
  }

  get descriptionCtrl() {
    return this.form.controls.description;
  }

  constructor() {
    effect(() => {
      const article = this.editingArticle();
      if (article) {
        this.form.reset({ title: article.title, description: article.description });
      } else {
        this.form.reset({ title: '', description: '' });
      }
    });
  }

  onSubmit(): void {
    if (this._locked || this.form.invalid) return;

    const { title, description } = this.form.getRawValue();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const editing = this.editingArticle();

    if (editing) {
      this.submitArticle.emit({
        ...editing,
        title: trimmedTitle,
        description: trimmedDescription,
      });
    } else {
      this.submitArticle.emit({
        id: this.generateId(),
        title: trimmedTitle,
        description: trimmedDescription,
        date: new Date().toISOString().split('T')[0],
        image: DEFAULT_IMAGE,
      });
    }

    this.form.reset({ title: '', description: '' });
  }

  onCancel(): void {
    this.form.reset({ title: '', description: '' });
    this.cancel.emit();
  }

  private generateId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
