import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Approuter } from '../app.router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule,Approuter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
