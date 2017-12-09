import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  okk=false;
  constructor(private rout:Router) { }

  ngOnInit() {
  }
  next(){
    this.okk=false;
    window.onscroll = function () { window.scrollTo(0,window.scrollY); };
  }
  login(data){
    this.okk=false;
    var info=(data.value)
    if (info.user=="a"&&info.pass=="a"){
      this.rout.navigate(['/admin'])
    }else if(info.user=="h"&&info.pass=="h"){
      this.rout.navigate(['/head'])
      
    }
    else if(info.user=="e"&&info.pass=="e"){
          this.rout.navigate(['/employee'])
    }
  
  }
}
