import { Component, OnInit } from '@angular/core';
import { FristServiceService } from '../Services/frist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  fillFrm=false;
  constructor(
    private ser:FristServiceService,
    private rout:Router
  ) { }
title="add title"
  ngOnInit() {
  }

  submitFrm(title){
    this.fillFrm=true;
this.ser.addtitle(title);
  }



}
