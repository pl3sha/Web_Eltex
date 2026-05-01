import { Component, input } from '@angular/core';

export interface MainEducationItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-main-education',
  imports: [],
  templateUrl: './main-education.html',
  styleUrl: './main-education.scss',
})
export class MainEducation {
  readonly items = input.required<MainEducationItem[]>();
}
