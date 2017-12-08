import { Component, OnInit } from '@angular/core';
import { FristServiceService } from '../Services/frist-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  fillFrm=false;
  constructor(
    private ser:FristServiceService
  ) { }
title="add title"
  ngOnInit() {
  }

  submitFrm(title){
    this.fillFrm=true;
this.ser.addtitle(title);
  }

}
