import { Routes } from '@angular/router';
import { Main } from './ui/pages/main/main';
import { Blog } from './ui/pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'blog', component: Blog },
  { path: '**', redirectTo: '' },
];
