import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailcredentialsRoutingModule } from './emailcredentials-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { EmailcredentialsComponent } from './components/emailcredentials.component';
import { EmailcredentialsCuComponent } from './components/emailcredentials-cu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmailcredentialsRoutingModule,
    SharedModule
  ],
  declarations: [
    EmailcredentialsComponent,
    EmailcredentialsCuComponent,
    ]
})
export class EmailcredentialsModule { }
