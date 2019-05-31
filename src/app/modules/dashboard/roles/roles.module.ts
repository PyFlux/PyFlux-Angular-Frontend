import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { RolesRoutingModule } from './roles-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { RolesComponent } from './components/roles.component';
import { RolesViewComponent } from './components/roles-view.component';
import { RolesCuComponent } from './components/roles-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RolesRoutingModule,
    DataTablesModule,
    SharedModule
  ],
  declarations: [
    RolesComponent,
    RolesViewComponent,
    RolesCuComponent,
    ]
})
export class RolesModule { }
