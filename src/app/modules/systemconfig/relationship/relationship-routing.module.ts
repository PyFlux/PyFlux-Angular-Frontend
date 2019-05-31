import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RelationshipComponent } from './components/relationship.component';
import { RelationshipCuComponent } from './components/relationship-cu.component';

const routes: Routes = [
  { path: '', component: RelationshipComponent },
  { path: 'add', component: RelationshipCuComponent },
  // { path: 'view/:id', component: RelationshipMenuComponent },
  { path: 'edit/:id', component: RelationshipCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RelationshipRoutingModule { }
