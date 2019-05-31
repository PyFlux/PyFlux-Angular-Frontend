import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CasteComponent } from './components/caste.component';
import { CasteCuComponent } from './components/caste-cu.component';

const routes: Routes = [
  { path: '', component: CasteComponent },
  { path: 'add', component: CasteCuComponent },
  // { path: 'view/:id', component: CasteMenuComponent },
  { path: 'edit/:id', component: CasteCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class CasteRoutingModule { }
