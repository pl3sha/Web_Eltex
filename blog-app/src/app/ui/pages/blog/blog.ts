import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Article } from '../../../models/article';
import { BlogArticleCard } from '../../components/blog-article-card/blog-article-card';
import { ArticleForm } from '../../components/article-form/article-form';
import { AdminPanel } from '../../components/admin-panel/admin-panel';
import { StatsDialog } from '../../components/stats-dialog/stats-dialog';

@Component({
  selector: 'app-blog',
  imports: [BlogArticleCard, ArticleForm, AdminPanel, StatsDialog],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly articles = signal<Article[]>([
    {
      id: '1',
      title: 'Как я подключал DS18B20 к ESP32 через OneWire',
      description:
        'Описание проблем с драйверами, настройка ESP-IDF и первые успешные замеры температуры.',
      date: '2025-03-12',
      image: 'image/esp32.jpg',
    },
    {
      id: '2',
      title: 'Flexbox без боли: верстаем форму за 5 минут',
      description:
        'Простое руководство по выравниванию элементов формы с помощью CSS Flexbox для новичков.',
      date: '2025-02-28',
      image: 'image/code.jpg',
    },
    {
      id: '3',
      title: 'Zero-Knowledge Proofs: почему это не магия',
      description:
        'Разбираем протокол доказательства наличия гамильтонова цикла на простом примере с графами.',
      date: '2025-02-15',
      image: 'image/crypto.jpg',
    },
    {
      id: '4',
      title: 'Микроконтроллеры для начинающих',
      description:
        'С чего начать знакомство с микроконтроллерами и какие платы выбрать для первых проектов.',
      date: '2025-01-20',
      image: 'image/microcontroller.jpg',
    },
    {
      id: '5',
      title: 'Git: рабочий процесс в команде',
      description:
        'Базовые команды, ветвление, разрешение конфликтов и правила командной работы.',
      date: '2025-01-05',
      image: 'image/git.jpg',
    },
    {
      id: '6',
      title: 'Изучаем Go: первые шаги',
      description:
        'Установка, синтаксис, отличия от других языков и первый микросервис на Go.',
      date: '2024-12-18',
      image: 'image/go.jpg',
    },
  ]);

  readonly showForm = signal(false);
  readonly showStats = signal(false);

  private readonly formEl = viewChild('formEl', { read: ElementRef });

  onCreate(): void {
    this.showForm.set(true);
    setTimeout(() => {
      const el = this.formEl()?.nativeElement as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  onShowStats(): void {
    this.showStats.set(true);
  }

  onCloseStats(): void {
    this.showStats.set(false);
  }

  onAdd(article: Article): void {
    this.articles.update((list) => [article, ...list]);
    this.showForm.set(false);
  }

  onCancel(): void {
    this.showForm.set(false);
  }

  onRemove(id: string): void {
    this.articles.update((list) => list.filter((a) => a.id !== id));
  }
}
