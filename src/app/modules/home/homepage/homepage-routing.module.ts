import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { CalenderComponent } from './components/calender.component';
import { ReportComponent } from './components/reports.component';

import { InstituteInfoComponent } from './components/instituteinfo.component';
import { GalleryComponent } from './components/gallery.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  // { path: '', component: HomeComponent },
  { path: 'calendar', component: CalenderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'instituteinfo', component: InstituteInfoComponent },
  { path: 'gallery', component: GalleryComponent },

  // { path: 'edit/:id', component: HomeCuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class HomepageRoutingModule { }
