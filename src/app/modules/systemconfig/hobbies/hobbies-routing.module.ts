import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HobbiesComponent } from './components/hobbies.component';
import { HobbiesCuComponent } from './components/hobbies-cu.component';

const routes: Routes = [
  { path: '', component: HobbiesComponent },
  { path: 'add', component: HobbiesCuComponent },
  // { path: 'view/:id', component: HobbiesMenuComponent },
  { path: 'edit/:id', component: HobbiesCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class HobbiesRoutingModule { }
