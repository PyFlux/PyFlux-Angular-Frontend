import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { MenumanagementRoutingModule } from './menumanagement-routing.module';

import { MenumanagementComponent } from './components/menumanagement.component';
// import { MenumanagementViewComponent } from './components/menumanagement-view.component';
// import { MenumanagementCuComponent } from './components/menumanagement-cu.component';
// import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenumanagementRoutingModule,
    // NgxJsonViewerModule,
  ],
  declarations: [
    MenumanagementComponent,
    // MenumanagementViewComponent,
    // MenumanagementCuComponent,
    ]
})
export class MenumanagementModule { }
