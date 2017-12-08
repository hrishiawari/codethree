import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  myFrm: FormGroup;
  
  constructor( private fb: FormBuilder,) { }

 
  ngOnInit() {
    this.myFrm = this.fb.group({
      name: ['', Validators.required],
      // message: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      mobile: ['',Validators.compose([Validators.required])],
      adharNo: ['', Validators.required],
      cAddress: ['', Validators.required],
      pAddress: ['', Validators.required],
      bdate: ['', Validators.required],
      qualif: ['', Validators.required],
      exp: ['', Validators.required],
      lastpack: ['', Validators.required],
      projects:['',Validators.required],
      mobilewhatsapp:['',Validators.required]

    });
  }
  onFrmSub() {
   console.log(this.myFrm.value)
    // window.onscroll = function () { window.scrollTo(0,0); };
    // this.ser.submit(this.myFrm.value).subscribe(
    //   data => {
    //   this.GoldData=data
    //   if(this.GoldData.success==true)
    //   {
    //     this.okk=true;
    //     this.contacttitle=" Thank you for getting in touch!";
    //     this.contactmsg="  One of our colleagues will get back to you shortly.Have a great day!"
        
    //   }
    //   else{
    //     this.okk=true;
    //     this.contacttitle="Something Went Wrong !!!";
    //     this.contactmsg="Please Try Again..."
    //   }
    //   }
      
    // );
  }
}
