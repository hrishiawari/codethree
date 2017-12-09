import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Add:FormGroup;
ImgUrl: any;
  constructor(
    private FBuild:FormBuilder
  ) { }

  ngOnInit() {
    this.Add=this.FBuild.group({
      title:['',Validators.required],
      disc:['',Validators.required]
    })
  }
  submitAdd(){
    console.log(this.Add.value)
  }
  choosePhoto() {
    document.getElementById('my_file').click();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.ImgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0].name);
    }
  }

}
