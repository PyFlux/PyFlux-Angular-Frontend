import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AclpermissionComponent } from './components/aclpermission.component';

const routes: Routes = [
  { path: '', component: AclpermissionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AclpermissionRoutingModule { }
