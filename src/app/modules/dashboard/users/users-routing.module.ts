import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users.component';
import { UsersCuComponent } from './components/users-cu.component';
import { UsersViewComponent } from './components/users-view.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: UsersCuComponent },
  { path: 'view/:id', component: UsersViewComponent },
  { path: 'edit/:id', component: UsersCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class UsersRoutingModule { }
