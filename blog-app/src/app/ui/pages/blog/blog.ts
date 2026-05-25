import { Component, ElementRef, computed, inject, OnInit, signal, viewChild } from '@angular/core';
import { delay, finalize, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Article } from '../../../models/article';
import { ArticlesQueryResult } from '../../../services/articles/articles-service.interface';
import { ARTICLES_DATA_SERVICE } from '../../../services/articles/articles-service.token';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';
import { ARTICLES_PAGE_SIZE } from '../../../services/articles/articles.service';
import { AdminPanel } from '../../components/admin-panel/admin-panel';
import { ArticleForm } from '../../components/article-form/article-form';
import { BlogArticleCard } from '../../components/blog-article-card/blog-article-card';
import { StatsDialog } from '../../components/stats-dialog/stats-dialog';

const INITIAL_LOAD_DELAY_MS = 1000;
const SUBMIT_DELAY_MS = 800;

@Component({
  selector: 'app-blog',
  imports: [BlogArticleCard, ArticleForm, AdminPanel, StatsDialog],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  private readonly store = inject(ArticlesStoreService);
  private readonly articlesData = inject(ARTICLES_DATA_SERVICE);
  private readonly title = inject(Title);

  readonly showForm = signal(false);
  readonly showStats = signal(false);
  readonly editingArticle = signal<Article | null>(null);
  readonly articlesLoading = signal(true);
  readonly isSaving = signal(false);

  private readonly formEl = viewChild('formEl', { read: ElementRef });

  readonly visibleArticles = computed(() => {
    const all = this.store.articles();
    const page = this.store.activePage();
    const start = (page - 1) * ARTICLES_PAGE_SIZE;
    return all.slice(start, start + ARTICLES_PAGE_SIZE);
  });

  readonly totalCount = computed(() => this.store.articles().length);

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.store.articles().length / ARTICLES_PAGE_SIZE)),
  );

  readonly activePage = computed(() => this.store.activePage());

  ngOnInit(): void {
    this.title.setTitle('Блог — Name-folio');
    timer(INITIAL_LOAD_DELAY_MS)
      .pipe(
        switchMap(() => this.articlesData.fetch()),
        finalize(() => this.articlesLoading.set(false)),
      )
      .subscribe((r) => this.apply(r));
  }

  onCreate(): void {
    this.editingArticle.set(null);
    this.showForm.set(true);
    this.scrollToForm();
  }

  onEdit(article: Article): void {
    this.editingArticle.set(article);
    this.showForm.set(true);
    this.scrollToForm();
  }

  onShowStats(): void {
    this.showStats.set(true);
  }

  onCloseStats(): void {
    this.showStats.set(false);
  }

  onSave(article: Article): void {
    if (this.isSaving()) {
      return;
    }
    this.isSaving.set(true);
    const editing = this.editingArticle();
    const req = editing
      ? this.articlesData.update(article)
      : this.articlesData.add(article);
    req
      .pipe(
        delay(SUBMIT_DELAY_MS),
        finalize(() => this.isSaving.set(false)),
      )
      .subscribe((r) => {
        this.apply(r);
        this.editingArticle.set(null);
        this.showForm.set(false);
      });
  }

  onCancel(): void {
    this.editingArticle.set(null);
    this.showForm.set(false);
  }

  onRemove(id: string): void {
    if (this.editingArticle()?.id === id) {
      this.editingArticle.set(null);
      this.showForm.set(false);
    }
    this.articlesData.remove(id).subscribe((r) => this.apply(r));
  }

  onPrevPage(): void {
    const p = this.store.activePage();
    if (p <= 1) {
      return;
    }
    this.articlesData.goToPage(p - 1).subscribe((r) => this.apply(r));
  }

  onNextPage(): void {
    const p = this.store.activePage();
    if (p >= this.totalPages()) {
      return;
    }
    this.articlesData.goToPage(p + 1).subscribe((r) => this.apply(r));
  }

  private apply(r: ArticlesQueryResult): void {
    this.store.setArticles(r.articles);
    this.store.setActivePage(r.activePage);
  }

  private scrollToForm(): void {
    setTimeout(() => {
      const el = this.formEl()?.nativeElement as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
