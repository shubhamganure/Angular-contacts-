import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private firebase:AngularFireDatabase) 
  { }

  contactList: AngularFireList<any>;

     form = new FormGroup({
     $key: new FormControl(null),
    firstname: new FormControl('', Validators.required),
     email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    
   });

   getInformation() 
   {
     this.contactList = this.firebase.list('contact');
     return this.contactList.snapshotChanges();
  }

  // populateForm(contact) 
  // {
  //   this.form.setValue(contact);
  // }

  deleteContact($key: string) 
  {
    this.contactList.remove($key);
  }

  insertInformation(contact)
  {
    this.firebase.list('contact').push({
      firstname: contact.firstname,
      lastname: contact.lastname,
      company: contact.company,
      title: contact.title,
      email: contact.email,
      phone: contact.phone,
      pic:contact.pic,
     
  });
}
}
