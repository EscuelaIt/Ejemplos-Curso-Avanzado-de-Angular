import { ResolveFn, Routes } from '@angular/router';
import { isAdminGuard } from '../../guards/is-admin.guard';
import { isLoggedGuard } from '../../guards/is-logged.guard';

const resolveTitle: ResolveFn<string> = () => {
  return Promise.resolve('Router child 1');
}

export const routesChildExampleContainer: Routes = [
  { path: 'child1', loadComponent: ()=>import('./rout-child1/rout-child1.component').then(x => x.RoutChild1Component), title: resolveTitle },
  { path: 'child2', loadComponent: ()=>import('./rout-child2/rout-child2.component').then(x => x.RoutChild2Component), title: 'Router child 2' },
  { path: 'child3', loadComponent: ()=>import('./rout-child3/rout-child3.component').then(x => x.RoutChild3Component), title: 'Router child 3' },
  { 
    path: 'protected', 
    loadComponent: ()=>import('./rout-protected/rout-protected.component').then(x => x.RoutProtectedComponent), 
    title: 'Protected',
    canActivate: [isLoggedGuard, isAdminGuard],
  },
];


