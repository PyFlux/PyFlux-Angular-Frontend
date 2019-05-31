import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CitytownComponent } from './components/citytown.component';
import { CitytownCuComponent } from './components/citytown-cu.component';

const routes: Routes = [
  { path: '', component: CitytownComponent },
  { path: 'add', component: CitytownCuComponent },
  // { path: 'view/:id', component: CitytownMenuComponent },
  { path: 'edit/:id', component: CitytownCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class CitytownRoutingModule { }
