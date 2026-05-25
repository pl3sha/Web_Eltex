import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { map, startWith } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Article } from '../../../models/article';
import { Category } from '../../../models/category';
import { DEFAULT_ARTICLE_IMAGE } from '../../../services/articles/article-mapper.service';
import { CategoryApiService } from '../../../services/categories/category.service';

@Component({
  selector: 'app-article-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
  ],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm implements OnInit {
  readonly editingArticle = input<Article | null>(null);
  readonly useBackend = environment.useBackend;

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
  private readonly categoryService = inject(CategoryApiService);

  readonly imagePreview = signal<string | null>(null);
  readonly selectedFile = signal<File | null>(null);
  readonly categories = signal<Category[]>([]);
  readonly filteredCategories = signal<Category[]>([]);

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(25)]],
    description: ['', [Validators.required]],
    categoryName: [''],
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
        this.form.reset({
          title: article.title,
          description: article.description,
          categoryName: article.categoryName ?? '',
        });
        this.imagePreview.set(article.image || DEFAULT_ARTICLE_IMAGE);
        this.selectedFile.set(null);
      } else {
        this.form.reset({ title: '', description: '', categoryName: '' });
        this.imagePreview.set(null);
        this.selectedFile.set(null);
      }
    });
  }

  ngOnInit(): void {
    if (!this.useBackend) {
      return;
    }
    this.categoryService.fetchAll().subscribe((items) => {
      this.categories.set(items);
      this.filteredCategories.set(items);
    });
    this.form.controls.categoryName.valueChanges
      .pipe(
        startWith(''),
        map((value) => this.filterCategories(value ?? '')),
      )
      .subscribe((items) => this.filteredCategories.set(items));
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedFile.set(file);
    if (file) {
      this.imagePreview.set(URL.createObjectURL(file));
    }
  }

  onSubmit(): void {
    if (this._locked || this.form.invalid) {
      return;
    }

    const { title, description, categoryName } = this.form.getRawValue();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedCategory = categoryName.trim();
    const editing = this.editingArticle();

    if (editing) {
      this.submitArticle.emit({
        ...editing,
        title: trimmedTitle,
        description: trimmedDescription,
        categoryName: trimmedCategory || undefined,
        imageFile: this.selectedFile(),
      });
    } else {
      this.submitArticle.emit({
        id: this.generateId(),
        title: trimmedTitle,
        description: trimmedDescription,
        date: new Date().toISOString().split('T')[0],
        image: DEFAULT_ARTICLE_IMAGE,
        categoryName: trimmedCategory || undefined,
        imageFile: this.selectedFile(),
      });
    }

    this.form.reset({ title: '', description: '', categoryName: '' });
    this.selectedFile.set(null);
    this.imagePreview.set(null);
  }

  onCancel(): void {
    this.form.reset({ title: '', description: '', categoryName: '' });
    this.selectedFile.set(null);
    this.imagePreview.set(null);
    this.cancel.emit();
  }

  private filterCategories(value: string): Category[] {
    const query = value.trim().toLowerCase();
    const items = this.categories();
    if (!query) {
      return items;
    }
    return items.filter((category) => category.name.toLowerCase().includes(query));
  }

  private generateId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
