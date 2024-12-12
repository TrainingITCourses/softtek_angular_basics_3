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
  {
    path: 'rockets',
    loadComponent: () => import('./routes/rockets/rockets.page'),
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./routes/auth/login.page'),
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./routes/auth/register.page'),
  },
  {
    path: 'launches/:launch_id',
    loadComponent: () => import('./routes/launches/launch-details.page'),
  },
];
