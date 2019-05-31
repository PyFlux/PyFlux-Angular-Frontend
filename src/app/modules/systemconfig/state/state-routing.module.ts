import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { StateComponent } from './components/state.component';
import { StateCuComponent } from './components/state-cu.component';

const routes: Routes = [
  { path: '', component: StateComponent },
  { path: 'add', component: StateCuComponent },
  // { path: 'view/:id', component: StateViewComponent },
  { path: 'edit/:id', component: StateCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class StateRoutingModule { }
