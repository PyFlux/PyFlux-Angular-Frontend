import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserrolesRoutingModule } from './userroles-routing.module';

import { UserrolesComponent } from './components/userroles.component';
// import { UserrolesViewComponent } from './components/userroles-view.component';
import { UserrolesCuComponent } from './components/userroles-cu.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserrolesRoutingModule,
    SharedModule
  ],
  declarations: [
    UserrolesComponent,
    // UserrolesViewComponent,
    UserrolesCuComponent,
    ]
})
export class UserrolesModule { }
