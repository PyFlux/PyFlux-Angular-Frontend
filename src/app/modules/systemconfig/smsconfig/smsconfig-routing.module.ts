import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SmsconfigComponent } from './components/smsconfig.component';
import { SmsconfigCuComponent } from './components/smsconfig-cu.component';

const routes: Routes = [
  { path: '', component: SmsconfigComponent },
  { path: 'add', component: SmsconfigCuComponent },
  // { path: 'view/:id', component: SmsconfigViewComponent },
  { path: 'edit/:id', component: SmsconfigCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class SmsconfigRoutingModule { }
