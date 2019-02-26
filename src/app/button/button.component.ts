import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


 

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public fun()
  {
    this.router.navigateByUrl('formlist');
    
    
  }







}
