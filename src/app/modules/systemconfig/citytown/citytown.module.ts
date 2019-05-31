import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitytownRoutingModule } from './citytown-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { CitytownComponent } from './components/citytown.component';
import { CitytownCuComponent } from './components/citytown-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CitytownRoutingModule,
    SharedModule
  ],
  declarations: [
    CitytownComponent,
    CitytownCuComponent,
    ]
})
export class CitytownModule { }
