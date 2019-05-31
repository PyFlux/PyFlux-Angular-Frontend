import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenumanagementComponent } from './components/menumanagement.component';
// import { MenumanagementCuComponent } from './components/menumanagement-cu.component';
// import { MenumanagementViewComponent } from './components/menumanagement-view.component';

const routes: Routes = [
  { path: '', component: MenumanagementComponent },
  // { path: 'add', component: MenumanagementCuComponent },
  // { path: 'view/:id', component: MenumanagementViewComponent },
  // { path: 'edit/:id', component: MenumanagementCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class MenumanagementRoutingModule { }
