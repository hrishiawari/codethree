import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { Approuter } from '../app.router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewComponent } from './new/new.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import {FristServiceService} from '../app/Services/frist-service.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HeadComponent } from './head/head.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
      HomeComponent,
      AboutusComponent,
      NewComponent, 
      AddEmpComponent, HeadComponent, AdminComponent, EmployeeComponent

  ],
  imports: [
    BrowserModule,RouterModule,Approuter ,HttpClientModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [FristServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
