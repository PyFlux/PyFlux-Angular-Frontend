import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilepageService {

  constructor(private  httpClient:  HttpClient) {}

  getProfile() {
    return this.httpClient.get('/usermanagement/profile/');
  }
  postProfile(profile) {
     return this.httpClient.post('/usermanagement/profile/', profile);
  }
  updateUserProfile(userprofile) {
    return this.httpClient.post('/usermanagement/edituserprofile/', userprofile);
  }
  updateUserAddress(userprofile) {
    return this.httpClient.post('/usermanagement/edituseraddress/', userprofile);
  }
  
  getUserProfile() {
    return this.httpClient.get('/usermanagement/edituserprofile/');
  }

  getFeetransactions() {
    // get logged in student's fee details
    // return [{'id': 1}, {'id': 2}];
    return this.httpClient.get('/usermanagement/getfeetransactions/');
  }

  sendEmailVerification() {
    return this.httpClient.get('/usermanagement/sendemailverification/');
  }
  sendMobileVerification(mobile) {
    return this.httpClient.post('/usermanagement/sendmobileverification/', {'mobile': mobile});
  }
  verifyMobile(verifymobile) {
    return this.httpClient.post('/usermanagement/verifymobile/', verifymobile);
  }
  getassignment() {
    // get logged in student's fee details
    // return [{'id': 1}, {'id': 2}];
    return this.httpClient.get('/usermanagement/assignment/');
  }
  getteacherassignment() {
    // get logged in student's fee details
    // return [{'id': 1}, {'id': 2}];
    return this.httpClient.get('/usermanagement/assignmentteacher/');
  }
  changeactivestatus(student_id,assignment_id) {
    return this.httpClient.get('/usermanagement/assignmentactivestatus/', { params: { assignment_id: assignment_id, student_id: student_id } });
  }
  changeinactivestatus(student_id,assignment_id) {
    return this.httpClient.get('/usermanagement/assignmentinactivestatus/', { params: { assignment_id: assignment_id, student_id: student_id } });
  }
  changeinprogressstatus(student_id,assignment_id) {
    return this.httpClient.get('/usermanagement/assignmentinprogressstatus/', { params: { assignment_id: assignment_id, student_id: student_id } });
  }
  changecompletedstatus(student_id,assignment_id) {
    return this.httpClient.get('/usermanagement/assignmentcompletedstatus/',{ params: { assignment_id: assignment_id, student_id: student_id } });
  }
  getuser() {
    return this.httpClient.get('/hr/current_user/');
  }
  getfeedbackuser() {
    return this.httpClient.get('/utils/getfeedbackdetails/');
  }
  changefeedback(feedback_id, status) {
    return this.httpClient.get('/usermanagement/changefeedback/', { params: { 'id': feedback_id, status } });
  }
  changefeedbackinporogress(feedback_id) {
    return this.httpClient.get('/usermanagement/feedbackinprogressstatus/', { params: { 'id': feedback_id } });
  }
  changefeedbackresolved(feedback_id) {
    return this.httpClient.get('/usermanagement/feedbackresolvedstatus/', { params: { 'id': feedback_id } });
  }
  changefeedbackclosed(feedback_id) {
    return this.httpClient.get('/usermanagement/feedbackclosedstatus/', { params: { 'id': feedback_id } });
  }
  getStudentDocuments() {
    // get logged in student's fee details
    // return [{'id': 1}, {'id': 2}];
    return this.httpClient.get('/usermanagement/getdocuments/');
  }
}
