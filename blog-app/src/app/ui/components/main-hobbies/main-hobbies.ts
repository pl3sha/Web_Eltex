import { Component, input } from '@angular/core';

export interface MainHobbyItem {
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-main-hobbies',
  imports: [],
  templateUrl: './main-hobbies.html',
  styleUrl: './main-hobbies.scss',
})
export class MainHobbies {
  readonly intro = input<string>('');
  readonly items = input.required<MainHobbyItem[]>();
}
