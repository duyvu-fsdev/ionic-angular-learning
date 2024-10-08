import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustompipesComponent } from './components/custompipes/custompipes.component';
import { ServicesDiComponent } from './components/services-di/services-di.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent, title: 'Home' },
 { path: 'details/:id', component: DetailsComponent, title: 'Details' },
 { path: 'basic-knowledge', redirectTo: '/basic-knowledge/ng-model-binding', pathMatch: 'full' },
 { path: 'basic-knowledge/ng-model-binding', component: NgModelBindingComponent, title: 'Data Binding' },
 { path: 'basic-knowledge/directives', component: DirectivesComponent, title: 'Directives' },
 { path: 'basic-knowledge/pipes', component: PipesComponent, title: 'Pipes' },
 { path: 'basic-knowledge/custompipes', component: CustompipesComponent, title: 'Custom Pipes' },
 { path: 'basic-knowledge/services-di', component: ServicesDiComponent, title: 'Services and Dependency Injection' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule {}
