import { Component, input } from '@angular/core';

export interface MainSkillItem {
  text: string;
}

@Component({
  selector: 'app-main-skills',
  imports: [],
  templateUrl: './main-skills.html',
  styleUrl: './main-skills.scss',
})
export class MainSkills {
  readonly items = input.required<MainSkillItem[]>();
}
