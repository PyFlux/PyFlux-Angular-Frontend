import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile.component';
import { VerifyMobileComponent } from './components/verify/verify-mobile.component';
import { VerifyEmailComponent } from './components/verify/verify-email.component';

import { ProfileEditPasswordComponent } from './components/profile-edit-password.component';
import { ProfileEditUserProfileComponent } from './components/profile-edit-userprofile.component';
import { ProfileEditAddressComponent } from './components/profile-edit-address.component';

import { FeetransactionsComponent } from './components/tabs/tab-fees.component';
import { TeacherassignmentComponent } from './components/tabs/tab-teacherassignments.component';
import { AssignmentteacherComponent } from './components/tabs/tab-assignmentteacher.component';
import { FeedbacksComponent } from './components/tabs/tab-feedback.component';
import { StudentDocumentsComponent } from './components/tabs/tab-documents.component.';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'verifymobile', component: VerifyMobileComponent },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'edit_userprofile', component: ProfileEditUserProfileComponent },
  { path: 'edit_address', component: ProfileEditAddressComponent },
  { path: 'edit_password', component: ProfileEditPasswordComponent },
  { path: 'feetransactions', component: FeetransactionsComponent },
  { path: 'teacherassignment', component: TeacherassignmentComponent },
  { path: 'assignmentteacher', component: AssignmentteacherComponent },
  { path: 'feedbacks', component: FeedbacksComponent },
  { path: 'studentdocuments', component: StudentDocumentsComponent },

  // { path: 'edit_userprofile', component: ProfileEditUserProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProfilepageRoutingModule { }
