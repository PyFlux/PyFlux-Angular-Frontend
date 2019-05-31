import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './components/roles.component';
import { RolesCuComponent } from './components/roles-cu.component';
import { RolesViewComponent } from './components/roles-view.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'add', component: RolesCuComponent },
  { path: 'view/:id', component: RolesViewComponent },
  { path: 'edit/:id', component: RolesCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RolesRoutingModule { }
