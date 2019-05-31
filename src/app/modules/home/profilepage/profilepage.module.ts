import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HighchartsChartModule } from 'highcharts-angular';

import { ProfilepageRoutingModule } from './profilepage-routing.module';
// import { TermwiseReportsComponent } from '../../reports/studentreports/components/termwisereports.component';
import { ProfileComponent } from './components/profile.component';
import { VerifyTopBarComponent } from './components/verify/verify-topbar.component';
import { VerifyMobileComponent } from './components/verify/verify-mobile.component';
import { VerifyEmailComponent } from './components/verify/verify-email.component';

import { ProfileStudentComponent } from './components/profile-student.component';
import { ProfileParentComponent } from './components/profile-parent.component';
import { ProfileOthersComponent } from './components/profile-others.component';

import { ProfileSideBarComponent } from './components/sidebar.component';
import { ProfileTabPersonalDetailsComponent } from './components/tabs/tab-personaldetails.component';
import { ProfileTabAddressComponent } from './components/tabs/tab-address.component';
import { FeetransactionsComponent } from './components/tabs/tab-fees.component';
import { TeacherassignmentComponent } from './components/tabs/tab-teacherassignments.component';
import { AssignmentteacherComponent } from './components/tabs/tab-assignmentteacher.component';
import { ProfileEditAddressComponent } from './components/profile-edit-address.component';
import { ProfileEditUserProfileComponent } from './components/profile-edit-userprofile.component';
import { ProfileEditPasswordComponent } from './components/profile-edit-password.component';
import { FeedbacksComponent } from './components/tabs/tab-feedback.component';
import { StudentDocumentsComponent } from './components/tabs/tab-documents.component.';
import { StudentDocumentFilterComponent }from '../profilepage/components/studentdocument-filter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    ProfilepageRoutingModule,
    HighchartsChartModule,
    DataTablesModule,
    TabsModule.forRoot()
  ],
  declarations: [
    ProfileComponent,
    VerifyTopBarComponent,
    VerifyMobileComponent,
    VerifyEmailComponent,

    ProfileStudentComponent,
    ProfileParentComponent,
    ProfileOthersComponent,

    ProfileSideBarComponent,
    ProfileTabPersonalDetailsComponent,
    ProfileTabAddressComponent,
    FeetransactionsComponent,

    ProfileEditAddressComponent,
    ProfileEditPasswordComponent,
    ProfileEditUserProfileComponent,
    TeacherassignmentComponent,
    AssignmentteacherComponent,
    FeedbacksComponent,
    StudentDocumentsComponent,
    StudentDocumentFilterComponent
    // TermwiseReportsComponent
    ]
})
export class ProfilepageModule { }
