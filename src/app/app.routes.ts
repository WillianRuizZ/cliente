import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/listar-producto/listar-producto.component').then(m => m.ListarProductoComponent)
  }, {
    path: 'crear-producto',
    loadComponent: () => import('./components/crear-producto/crear-producto.component').then(m => m.CrearProductoComponent)
  },
  {
    path: 'editar-producto/:id',
    loadComponent: () => import('./components/crear-producto/crear-producto.component').then(m => m.CrearProductoComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
