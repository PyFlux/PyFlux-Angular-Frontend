import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReligionComponent } from './components/religion.component';
import { ReligionCuComponent } from './components/religion-cu.component';

const routes: Routes = [
  { path: '', component: ReligionComponent },
  { path: 'add', component: ReligionCuComponent },
  { path: 'edit/:id', component: ReligionCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ReligionRoutingModule { }
