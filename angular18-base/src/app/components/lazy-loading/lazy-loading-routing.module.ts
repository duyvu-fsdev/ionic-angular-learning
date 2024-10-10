import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import { menuGuard } from '../../guards/menu.guard';

const routes: Routes = [
 { path: '', component: LazyLoadingComponent },
 { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule), title: 'Menu with Lazy Loading' },
 {
  path: 'detail/:id',
  loadChildren: () => import('./detail/detail.module').then((m) => m.DetailModule),
  title: 'Menu Detail with Lazy Loading',
  canActivate: [menuGuard],
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
