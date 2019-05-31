import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmailcredentialsCuComponent } from './components/emailcredentials-cu.component';
import { EmailcredentialsComponent } from './components/emailcredentials.component';

const routes: Routes = [
  { path: '', component: EmailcredentialsComponent },
  { path: 'add', component: EmailcredentialsCuComponent },
  // { path: 'view/:id', component: emailcredentialsMenuComponent },
  { path: 'edit/:id', component: EmailcredentialsCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class EmailcredentialsRoutingModule { }
