import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule) },
 { path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterPageModule) },
 { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule), canActivate: [authGuard] },
 { path: 'pickup-call', loadChildren: () => import('./pages/pickup-call/pickup-call.module').then((m) => m.PickupCallPageModule), canActivate: [authGuard] },
 { path: 'pickup-calls', loadChildren: () => import('./pages/pickup-calls/pickup-calls.module').then((m) => m.PickupCallsPageModule), canActivate: [authGuard] },
];

@NgModule({
 imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
 exports: [RouterModule],
})
export class AppRoutingModule {}
