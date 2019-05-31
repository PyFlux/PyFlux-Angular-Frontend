import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LanguagesComponent } from './components/languages.component';
import { LanguagesCuComponent } from './components/languages-cu.component';

const routes: Routes = [
  { path: '', component: LanguagesComponent },
  { path: 'add', component: LanguagesCuComponent },
  // { path: 'view/:id', component: LanguagesMenuComponent },
  { path: 'edit/:id', component: LanguagesCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class LanguagesRoutingModule { }
