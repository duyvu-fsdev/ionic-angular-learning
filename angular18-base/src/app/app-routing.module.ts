import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { MenuComponent } from './components/menu/menu.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent, title: 'Home' },
 { path: 'details/:id', component: DetailsComponent, title: 'Details' },
 { path: 'basic-knowledge', redirectTo: 'ng-model-binding', pathMatch: 'full' },
 { path: 'ng-model-binding', component: NgModelBindingComponent, title: 'Data Binding' },
 { path: 'directives', component: DirectivesComponent, title: 'Directives' },
 { path: 'pipes', component: PipesComponent, title: 'Pipes' },
 { path: 'custompipes', component: CustompipesComponent, title: 'Custom Pipes' },
 { path: 'services-di', component: ServicesDiComponent, title: 'Services and Dependency Injection' },
 { path: 'http-client', component: HttpClientComponent, title: 'Http Client' },
 { path: 'menu', component: MenuComponent, title: 'CURD Menu', canActivate: [authGuard] },
 {
  path: 'lazy-loading',
  loadChildren: () => import('./components/lazy-loading/lazy-loading.module').then((m) => m.LazyLoadingModule),
  title: 'Lazy Loading',
 },
 { path: 'signals', loadChildren: () => import('./components/signals/signals.module').then((m) => m.SignalsModule), title: 'Signals' },
 {
  path: 'performance',
  loadChildren: () => import('./components/performance/performance.module').then((m) => m.PerformanceModule),
  title: 'Performance',
 },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule {}
