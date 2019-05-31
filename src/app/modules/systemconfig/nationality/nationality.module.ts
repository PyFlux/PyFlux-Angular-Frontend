import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { NationalityRoutingModule } from './nationality-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { NationalityComponent } from './components/nationality.component';
import { NationalityCuComponent } from './components/nationality-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NationalityRoutingModule,
    SharedModule
  ],
  declarations: [
    NationalityComponent,
    NationalityCuComponent,
    ]
})
export class NationalityModule { }
