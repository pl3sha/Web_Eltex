import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article';
import { HomeArticleCard } from '../../components/home-article-card/home-article-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HomeArticleCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly articles: Article[] = [
    {
      id: 'h1',
      title: 'Как я подключал DS18B20 к ESP32 через OneWire',
      description:
        'Описание проблем с драйверами, настройка ESP-IDF и первые успешные замеры температуры.',
      date: '2025-03-12',
      image: 'image/esp32.jpg',
    },
    {
      id: 'h2',
      title: 'Flexbox без боли: верстаем форму за 5 минут',
      description:
        'Простое руководство по выравниванию элементов формы с помощью CSS Flexbox для новичков.',
      date: '2025-02-28',
      image: 'image/code.jpg',
    },
    {
      id: 'h3',
      title: 'Zero-Knowledge Proofs: почему это не магия',
      description:
        'Разбираем протокол доказательства наличия гамильтонова цикла на простом примере с графами.',
      date: '2025-02-15',
      image: 'image/crypto.jpg',
    },
  ];
}
