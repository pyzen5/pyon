import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefRoutingModule } from './ref-routing.module';
import { RefComponent } from './ref.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [RefComponent, ObservablesComponent],
  imports: [
    CommonModule,
    RefRoutingModule
  ]
})
export class RefModule { }
