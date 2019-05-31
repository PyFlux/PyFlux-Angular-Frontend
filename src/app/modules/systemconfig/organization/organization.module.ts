import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { OrganizationRoutingModule } from './organization-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { OrganizationComponent } from './components/organization.component';
import { OrganizationViewComponent } from './components/organization-view.component';
import { OrganizationCuComponent } from './components/organization-cu.component';
// import { OrganizationCategoryComponent } from './organizationcategory/components/organization-category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationRoutingModule,
    EditorModule,
    SharedModule
  ],
  declarations: [
    OrganizationComponent,
    OrganizationViewComponent,
    OrganizationCuComponent,
    // OrganizationCategoryComponent
    ]
})
export class OrganizationModule { }
