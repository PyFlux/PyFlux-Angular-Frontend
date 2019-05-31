import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { HobbiesComponent } from './components/hobbies.component';
import { HobbiesCuComponent } from './components/hobbies-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HobbiesRoutingModule,
    SharedModule
  ],
  declarations: [
    HobbiesComponent,
    HobbiesCuComponent,
  ]
})
export class HobbiesModule { }
