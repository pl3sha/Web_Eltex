import { Component, input } from '@angular/core';

export interface MainWorkItem {
  kind: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-main-work',
  imports: [],
  templateUrl: './main-work.html',
  styleUrl: './main-work.scss',
})
export class MainWork {
  readonly items = input.required<MainWorkItem[]>();
}
