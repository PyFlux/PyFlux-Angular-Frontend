import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SmscredentialsCuComponent } from './components/smscredentials-cu.component';
import { SmscredentialsComponent } from './components/smscredentials.component';

const routes: Routes = [
  { path: '', component: SmscredentialsComponent },
  { path: 'add', component: SmscredentialsCuComponent },
  // { path: 'view/:id', component: emailcredentialsMenuComponent },
  { path: 'edit/:id', component: SmscredentialsCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    
  ],
  exports: [ RouterModule ],
  declarations: [
    
  ]
})
export class SmscredentialsRoutingModule { }
