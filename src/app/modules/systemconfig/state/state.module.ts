import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StateRoutingModule } from './state-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { StateComponent } from './components/state.component';
import { StateCuComponent } from './components/state-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StateRoutingModule,
    SharedModule
  ],
  declarations: [
    StateComponent,
    StateCuComponent,
    ]
})
export class StateModule { }
