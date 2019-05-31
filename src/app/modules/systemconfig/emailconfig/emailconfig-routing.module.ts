import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmailconfigComponent } from './components/emailconfig.component';
import { EmailconfigCuComponent } from './components/emailconfig-cu.component';

const routes: Routes = [
  { path: '', component: EmailconfigComponent },
  { path: 'add', component: EmailconfigCuComponent },
  // { path: 'view/:id', component: EmailconfigViewComponent },
  { path: 'edit/:id', component: EmailconfigCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class EmailconfigRoutingModule { }
