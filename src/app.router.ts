import {RouterModule ,Routes} from '@angular/router'
import { NavbarComponent } from './app/navbar/navbar.component';

 const routes:Routes=[
    {path:'',component:NavbarComponent },    
  
    
];
export const Approuter=RouterModule.forRoot(routes);
