import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlesQueryResult } from '../../../services/articles/articles-service.interface';
import { ARTICLES_DATA_SERVICE } from '../../../services/articles/articles-service.token';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';
import { HomeArticleCard } from '../../components/home-article-card/home-article-card';
import { MainEducation, MainEducationItem } from '../../components/main-education/main-education';
import { MainHero } from '../../components/main-hero/main-hero';
import { MainHobbies, MainHobbyItem } from '../../components/main-hobbies/main-hobbies';
import { MainSkillItem, MainSkills } from '../../components/main-skills/main-skills';
import { MainWork, MainWorkItem } from '../../components/main-work/main-work';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink,
    HomeArticleCard,
    MainHero,
    MainSkills,
    MainWork,
    MainEducation,
    MainHobbies,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  private readonly store = inject(ArticlesStoreService);
  private readonly articlesData = inject(ARTICLES_DATA_SERVICE);

  readonly skillItems: MainSkillItem[] = [
    { text: 'HTML5, CSS3, базовый JavaScript' },
    { text: 'Языки: C, Python, Go (изучаю)' },
    { text: 'Работа с микроконтроллерами: ESP32, Arduino' },
  ];

  readonly workItems: MainWorkItem[] = [
    {
      kind: 'Опыт работы',
      title: 'Цветочный магазин',
      description: 'Помогал маме в цветочном магазине каждое 8 марта',
    },
    {
      kind: 'Опыт работы',
      title: 'Петропавловск-Камчатский',
      description: 'Рыбачил, работал на заводе',
    },
    {
      kind: 'Стажировка',
      title: 'Системный администратор',
      description: 'Настройка локальной сети, помощь пользователям, документация',
    },
  ];

  readonly educationItems: MainEducationItem[] = [
    {
      title: 'СибГУТИ',
      description:
        'Сибирский Государственный Университет Телекоммуникаций и Информатики, 09.03.01 Информатика и вычислительная техника',
    },
  ];

  readonly hobbyItems: MainHobbyItem[] = [
    { image: 'image/nature.jpg', alt: 'Природа', label: 'Фотография' },
    { image: 'image/electronics.jpg', alt: 'Электроника', label: 'Электроника' },
    { image: 'image/drawing.jpg', alt: 'Рисование', label: 'Рисование' },
  ];

  readonly hobbyIntro =
    'Помимо учёбы и работы, я увлекаюсь фотографией, электроникой и иногда рисую.';

  readonly latestArticles = computed(() => {
    const list = this.store.articles();
    const sorted = [...list].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    return sorted.slice(0, 2);
  });

  ngOnInit(): void {
    this.articlesData.fetch().subscribe((r) => this.apply(r));
  }

  private apply(r: ArticlesQueryResult): void {
    this.store.setArticles(r.articles);
    this.store.setActivePage(r.activePage);
  }
}
