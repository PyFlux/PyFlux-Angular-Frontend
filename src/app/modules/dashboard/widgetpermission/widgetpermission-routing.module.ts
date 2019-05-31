import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WidgetPermissionComponent } from './components/widgetpermission.component';

const routes: Routes = [
  { path: '', component: WidgetPermissionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class WidgetPermissionRoutingModule { }
