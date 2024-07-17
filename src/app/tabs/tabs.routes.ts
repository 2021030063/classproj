import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'maestros',
        loadComponent: () =>
          import('../maestros/maestros.page').then((m) => m.MaestrosPage),
      },
      {
        path: 'alumnos',
        loadComponent: () =>
          import('../alumnos/alumnos.page').then((m) => m.AlumnosPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/maestros',
    pathMatch: 'full',
  },
];
