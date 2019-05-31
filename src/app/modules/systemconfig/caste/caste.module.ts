import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CasteRoutingModule } from './caste-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { CasteComponent } from './components/caste.component';
import { CasteCuComponent } from './components/caste-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CasteRoutingModule,
    SharedModule
  ],
  declarations: [
    CasteComponent,
    CasteCuComponent,
    ]
})
export class CasteModule { }
