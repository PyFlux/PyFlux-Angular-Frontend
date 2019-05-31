import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NationalityComponent } from './components/nationality.component';
import { NationalityCuComponent } from './components/nationality-cu.component';

const routes: Routes = [
  { path: '', component: NationalityComponent },
  { path: 'add', component: NationalityCuComponent },
  { path: 'edit/:id', component: NationalityCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class NationalityRoutingModule { }
