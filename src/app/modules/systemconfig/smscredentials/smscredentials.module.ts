import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SmscredentialsRoutingModule } from './smscredentials-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { SmscredentialsComponent } from './components/smscredentials.component';
import { SmscredentialsCuComponent } from './components/smscredentials-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SmscredentialsRoutingModule,
    SharedModule
  ],
  declarations: [
    SmscredentialsComponent,
    SmscredentialsCuComponent,
    ]
})
export class SmscredentialsModule { }
