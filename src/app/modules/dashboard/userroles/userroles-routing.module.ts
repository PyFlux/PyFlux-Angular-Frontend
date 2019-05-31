import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserrolesComponent } from './components/userroles.component';
import { UserrolesCuComponent } from './components/userroles-cu.component';

const routes: Routes = [
  { path: '', component: UserrolesComponent },
  { path: 'add', component: UserrolesCuComponent },
  { path: 'edit/:id', component: UserrolesCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class UserrolesRoutingModule { }
