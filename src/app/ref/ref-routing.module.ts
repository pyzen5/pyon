import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefComponent } from './ref.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: 'observables', component: ObservablesComponent},
  { path: '', component: RefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefRoutingModule { }
