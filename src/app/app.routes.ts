import { ActivatedRouteSnapshot, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadComponent: () => import('./products/products.component')
      },
      {
        path: 'details/:id',
        canActivate: [
          (route: ActivatedRouteSnapshot) => route.paramMap.has('id')
        ],
        loadComponent: () => import('./products/features/product-details/product-details.component')
      }
    ]
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.component')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
