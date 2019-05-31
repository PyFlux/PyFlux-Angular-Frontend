import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { SmsconfigRoutingModule } from './smsconfig-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { SmsconfigComponent } from './components/smsconfig.component';
import { SmsconfigCuComponent } from './components/smsconfig-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SmsconfigRoutingModule,
    SharedModule
  ],
  declarations: [
    SmsconfigComponent,
    SmsconfigCuComponent,
  ]
})
export class SmsconfigModule { }
