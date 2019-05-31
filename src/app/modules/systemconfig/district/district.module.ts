import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { DistrictRoutingModule } from './district-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DistrictCuComponent } from './components/district-cu.component';

import { DistrictComponent } from './components/district.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DistrictRoutingModule,
    SharedModule
  ],
  declarations: [
    DistrictComponent,
    DistrictCuComponent
    ]
})
export class DistrictModule { }
