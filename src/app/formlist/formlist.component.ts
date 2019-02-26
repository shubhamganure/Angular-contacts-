import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {

  valueArray=[];
  submitted:boolean;
  showSuccessMessage: boolean;
  formControls = this.Informationservice.form.controls;
  

 
  // contactForm: FormGroup;

  constructor(public fbobj: FormBuilder,private Informationservice:InformationService,private router:Router)
   {

   }

   onFileSelected(event)
   {
     console.log(event);

   }

   contactForm = new FormGroup(
    {
     firstname:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$')]),
     lastname:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z ]*$')]),
     company:new FormControl('',Validators.required),
     title:new FormControl('',Validators.required),
     email:new FormControl('',[Validators.required,Validators.email]),
     phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9 ]*$'),Validators.minLength(10),Validators.maxLength(10)]),
     pic:new FormControl('',)
    
    }


 );



  ngOnInit() {
  }

  onSubmit()
  {
    this.submitted = true;
    console.log("1",this.contactForm.value);
    this.Informationservice.insertInformation(this.contactForm.value);
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000);
    this.router.navigateByUrl('display');
    this.submitted = false;
    this.Informationservice.form.reset();


    this.Informationservice.form.setValue({
      $key: null,
      firstname: '',
      lastname: '',
      company: '',
      title: '',
      email: '',
      phone: '',
      pic:'',
     
    });
    

  }

}
