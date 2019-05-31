import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { SystemConfigRoutingModule } from './systemconfig-routing.module';
import { SystemConfigComponent } from './systemconfig.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SystemConfigRoutingModule,
    DataTablesModule
  ],
  declarations: [
    SystemConfigComponent

    ]
})
export class SystemConfigModule { }
