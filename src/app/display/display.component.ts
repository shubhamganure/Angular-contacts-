import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private Informationservice:InformationService)
   { }
   contactArray = [];
   showDeletedMessage: boolean;
   searchText: string = "";


  ngOnInit() {
    this.Informationservice. getInformation().subscribe(
      list => {
        this.contactArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });


  }

  onDelete($key) 
  {
    if (confirm('Contacts : Are you sure to remove the information ?')) 
    {
      this.Informationservice.deleteContact($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(contact) 
  {
    return (contact.firstname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || contact.lastname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1);
    
  }

}
