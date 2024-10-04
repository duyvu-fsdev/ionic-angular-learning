import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModelBindingComponent } from './components/ng-model-binding/ng-model-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent, title: 'Home page' },
 { path: 'details/:id', component: DetailsComponent, title: 'Details' },
 { path: 'basic-knowledge', redirectTo: '/basic-knowledge/ng-model-binding', pathMatch: 'full' },
 { path: 'basic-knowledge/ng-model-binding', component: NgModelBindingComponent, title: 'Data Binding' },
 { path: 'basic-knowledge/directives', component: DirectivesComponent, title: 'Directives' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule {}
