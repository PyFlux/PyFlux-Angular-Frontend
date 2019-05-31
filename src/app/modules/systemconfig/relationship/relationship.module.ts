import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { RelationshipRoutingModule } from './relationship-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { RelationshipComponent } from './components/relationship.component';
import { RelationshipCuComponent } from './components/relationship-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RelationshipRoutingModule,
    SharedModule
  ],
  declarations: [
    RelationshipComponent,
    RelationshipCuComponent,
    ]
})
export class RelationshipModule { }
