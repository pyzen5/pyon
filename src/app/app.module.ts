import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './comp/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './comp/footer/footer.component';
import { MaterialuiModule } from './materialui/materialui.module';
import { LoginComponent } from './comp/login/login.component';
import { SidenavComponent } from './comp/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
