import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HelpdocComponent } from './components/helpdoc.component';
import { GeneralSettingsComponent } from './components/generalsettings.component';

const routes: Routes = [
  { path: 'helpdoc', component: HelpdocComponent },
  { path: 'generalsettings', component: GeneralSettingsComponent },
  // { path: 'edit/:id', component: MenuitemsCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class MenuitemsRoutingModule { }
