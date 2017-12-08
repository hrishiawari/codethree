import {RouterModule ,Routes} from '@angular/router'
import { NavbarComponent } from './app/navbar/navbar.component';
import { AboutusComponent } from './app/aboutus/aboutus.component';
import { HomeComponent } from './app/home/home.component';
import { NewComponent } from './app/new/new.component';

 const routes:Routes=[
    {path:'',component:HomeComponent },   
    {path:'aboutus',component:AboutusComponent }, 
    {path:'new',component:NewComponent },    
    
    
  
    
];
export const Approuter=RouterModule.forRoot(routes);
