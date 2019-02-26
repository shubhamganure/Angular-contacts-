import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';
import { FormlistComponent } from './formlist/formlist.component';

const routes: Routes = [
  {path : 'button', component:ButtonComponent},
  {path : 'formlist', component:FormlistComponent},
  {path : 'display' ,component:DisplayComponent},
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  // default path
 { path: '', component:ButtonComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
