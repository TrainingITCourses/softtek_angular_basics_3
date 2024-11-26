import { Routes } from '@angular/router';
//import { AboutPage } from './routes/about/about.page';
import { HomePage } from './routes/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about.page'),
  },
];
