import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './components/country.component';
import { CountryCuComponent } from './components/country-cu.component';

const routes: Routes = [
  { path: '', component: CountryComponent },
  { path: 'add', component: CountryCuComponent },
  // { path: 'menu/:id', component: CountryMenuComponent },
  { path: 'edit/:id', component: CountryCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class CountryRoutingModule { }
