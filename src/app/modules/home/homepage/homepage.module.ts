import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomepageRoutingModule } from './homepage-routing.module';
import { InstituteInfoComponent } from './components/instituteinfo.component';
import { GalleryComponent } from './components/gallery.component';

import { SharedModule } from '../../../shared/shared.module';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalenderComponent } from './components/calender.component';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardProfileComponent } from './components/dashboardwidgets/profile.component';
import { DashboardGraphsComponent } from './components/dashboardwidgets/graphs.component';
import { DashboardFeesComponent } from './components/dashboardwidgets/fees.component';
import { DashboardEventsComponent } from './components/dashboardwidgets/events.component';
import { DashboardNoticeboardComponent } from './components/dashboardwidgets/noticeboard.component';
import { DashboardAssignmentComponent } from './components/dashboardwidgets/assignment.component';
import { DashboardHolidayComponent } from './components/dashboardwidgets/holiday.component';
import { PreloaderComponent } from './components/dashboardwidgets/preloader.component';

import { ReportComponent } from './components/reports.component';
import { TabsComponent } from './components/nav-tab.component';
import { HighchartsChartModule } from 'highcharts-angular';

// import { TimetablesViewComponent } from '../../timetable/timetables/components/timetables-view.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TabsModule.forRoot(),
    HighchartsChartModule,
    HomepageRoutingModule,
    SharedModule,
    FullCalendarModule,

  ],
  declarations: [
    TabsComponent,
    DashboardComponent,
    DashboardProfileComponent,
    DashboardGraphsComponent,
    DashboardFeesComponent,
    DashboardEventsComponent,
    DashboardNoticeboardComponent,
    DashboardAssignmentComponent,
    DashboardHolidayComponent,

    GalleryComponent,

    PreloaderComponent,
    

    CalenderComponent,
    ReportComponent,
    InstituteInfoComponent,
    // TimetablesViewComponent
    ]
})

export class HomepageModule { }
