import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule'},
            { path: 'academics', loadChildren: './academics/academics.module#AcademicsModule' },
            { path: 'administration', loadChildren: './administration/administration.module#AdministrationModule' },
            { path: 'admissions', loadChildren: './admissions/admissions.module#AdmissionsModule' },
            { path: 'communications', loadChildren: './communications/communications.module#CommunicationsModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule' },
            { path: 'exammanagement', loadChildren: './exammanagement/exammanagement.module#ExammanagementModule' },
            {
                path: 'extracurricularactivities',
                loadChildren: './extracurricularactivities/extracurricularactivities.module#ExtracurricularActivitiesModule'
            },
            { path: 'fees', loadChildren: './fees/fees.module#FeesModule' },
            { path: 'hr', loadChildren: './hr/hr.module#HrModule' },
            { path: 'library', loadChildren: './library/library.module#LibraryModule' },
            { path: 'parent', loadChildren: './parent/parent.module#ParentModule' },
            // { path: 'parent', loadChildren: './parents/parent.module#ParentModule' },

            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule'},
            { path: 'students', loadChildren: './students/students.module#StudentsModule' },
            { path: 'systemconfig', loadChildren: './systemconfig/systemconfig.module#SystemConfigModule' },
            { path: 'timetable', loadChildren: './timetable/timetable.module#TimetableModule'},
            { path: 'utils', loadChildren: './utils/utils.module#UtilsModule'},
            { path: 'documentuploader', loadChildren: './documentuploader/documentuploader.module#DocumentuploaderModule'},
            { path: 'hostel', loadChildren: './hostel/hostel.module#HostelModule'},
            { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'},
            

            // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
            // { path: '**', redirectTo: 'not-found'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
