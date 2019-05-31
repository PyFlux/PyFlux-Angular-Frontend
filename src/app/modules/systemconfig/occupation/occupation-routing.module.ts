import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OccupationComponent } from './components/occupation.component';
import { OccupationCuComponent } from './components/occupation-cu.component';

const routes: Routes = [
  { path: '', component: OccupationComponent },
  { path: 'add', component: OccupationCuComponent },
  // { path: 'menu/:id', component: OccupationMenuComponent },
  { path: 'edit/:id', component: OccupationCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class OccupationRoutingModule { }
