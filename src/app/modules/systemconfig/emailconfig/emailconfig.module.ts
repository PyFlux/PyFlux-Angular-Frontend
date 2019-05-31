import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { EmailconfigRoutingModule } from './emailconfig-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { EmailconfigComponent } from './components/emailconfig.component';
import { EmailconfigCuComponent } from './components/emailconfig-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmailconfigRoutingModule,
    SharedModule
  ],
  declarations: [
    EmailconfigComponent,
    EmailconfigCuComponent,
    ]
})
export class EmailconfigModule { }
