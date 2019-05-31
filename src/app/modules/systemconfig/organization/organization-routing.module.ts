import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './components/organization.component';
import { OrganizationCuComponent } from './components/organization-cu.component';
import { OrganizationViewComponent } from './components/organization-view.component';


// import { OrganizationCategoryComponent } from './organizationcategory/components/organization-category.component';

const routes: Routes = [
  { path: '', component: OrganizationComponent },
  { path: 'add', component: OrganizationCuComponent },
  { path: 'view/:id', component: OrganizationViewComponent },
  { path: 'edit/:id', component: OrganizationCuComponent },

  // { path: 'organizationcategory', component: OrganizationCategoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class OrganizationRoutingModule { }
