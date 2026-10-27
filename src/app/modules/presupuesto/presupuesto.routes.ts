import { Routes } from '@angular/router';

export const PRESUPUESTO_ROUTES: Routes = [{
  path: 'procesos/catalogo-versiones',
  loadComponent: () => import('./catalogo-versiones/catalogo-versiones-bandeja.component').then(m => m.CatalogoVersionesBandejaComponent),
}, {
  path: 'procesos/catalogo-versiones/nuevo',
  loadComponent: () => import('./catalogo-versiones/catalogo-versiones-registro.component').then(m => m.CatalogoVersionesRegistroComponent),
}];
