import { Routes } from '@angular/router';
import { Main } from './ui/pages/main/main';
import { Blog } from './ui/pages/blog/blog';
import { Post } from './ui/pages/post/post';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'blog', component: Blog },
  { path: 'blog/:id', component: Post },
  { path: '**', redirectTo: '' },
];
