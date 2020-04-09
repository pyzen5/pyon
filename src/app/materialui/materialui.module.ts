import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [MatMenuModule, MatToolbarModule]  // re-exporting the modules
})
export class MaterialuiModule { }
