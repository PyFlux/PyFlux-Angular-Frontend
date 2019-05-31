import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { LanguagesRoutingModule } from './languages-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { LanguagesCuComponent } from './components/languages-cu.component';

import { LanguagesComponent } from './components/languages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LanguagesRoutingModule,
    SharedModule
  ],
  declarations: [
    LanguagesComponent,
    LanguagesCuComponent
    ]
})
export class LanguagesModule { }
