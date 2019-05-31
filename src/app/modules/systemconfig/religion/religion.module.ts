import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { ReligionRoutingModule } from './religion-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { ReligionComponent } from './components/religion.component';
import { ReligionCuComponent } from './components/religion-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReligionRoutingModule,
    SharedModule
  ],
  declarations: [
    ReligionComponent,
    ReligionCuComponent,
    ]
})
export class ReligionModule { }
