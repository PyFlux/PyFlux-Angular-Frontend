import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './components/users.component';
import { UsersViewComponent } from './components/users-view.component';
import { UsersCuComponent } from './components/users-cu.component';
import { ConfirmPasswordValidatorDirective } from './components/equal-validator.directive';
import { UsersFilterComponent } from './components/users-filter.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UsersViewComponent,
    UsersCuComponent,
    ConfirmPasswordValidatorDirective,
    UsersFilterComponent
    ]
})
export class UsersModule { }
