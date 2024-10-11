import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';

const routes: Routes = [{ path: '', component: SignalsComponent }];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule],
})
export class SignalsRoutingModule {}
