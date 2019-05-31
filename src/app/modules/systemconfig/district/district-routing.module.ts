import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DistrictComponent } from './components/district.component';
import { DistrictCuComponent } from './components/district-cu.component';

const routes: Routes = [
  { path: '', component: DistrictComponent },
  { path: 'add', component: DistrictCuComponent },
  // { path: 'view/:id', component: DistrictMenuComponent },
  { path: 'edit/:id', component: DistrictCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class DistrictRoutingModule { }
