import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule
  ]  // re-exporting the modules
})
export class MaterialuiModule { }
