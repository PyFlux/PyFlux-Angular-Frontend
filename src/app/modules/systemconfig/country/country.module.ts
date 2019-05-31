import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { CountryComponent } from './components/country.component';
import { CountryCuComponent } from './components/country-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountryRoutingModule,
    SharedModule
  ],
  declarations: [
    CountryComponent,
    CountryCuComponent,
    ]
})
export class CountryModule { }
