import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-home-article-card',
  imports: [DatePipe],
  templateUrl: './home-article-card.html',
  styleUrl: './home-article-card.scss',
})
export class HomeArticleCard {
  @Input({ required: true }) article!: Article;
}
