import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OccupationRoutingModule } from './occupation-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { OccupationComponent } from './components/occupation.component';
import { OccupationCuComponent } from './components/occupation-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OccupationRoutingModule,
    SharedModule
  ],
  declarations: [
    OccupationComponent,
    OccupationCuComponent,
    ]
})
export class OccupationModule { }
