import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AclpermissionRoutingModule } from './aclpermission-routing.module';
import { AclpermissionComponent } from './components/aclpermission.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AclpermissionRoutingModule
  ],
  declarations: [
    AclpermissionComponent,
    ]
})
export class AclpermissionModule { }
