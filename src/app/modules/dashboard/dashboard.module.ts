import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    DataTablesModule
  ],
  declarations: [
    DashboardComponent
    ]
})
export class DashboardModule { }
