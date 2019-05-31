import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilepageService } from '../../profilepage.service';

@Component({
  selector: 'app-studentdocuments',
  template: `
 
  <div class="x_panel">
  <!--<div class="x_title">
    <h2>Student Documents</h2>
    <div class="clearfix"></div>
  </div>-->
  <div class="x_content">
    <table class="table table-striped " datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger">
      <thead>
        <tr>
        <th>Filename</th>
        <th>Teacher</th>
        <th>Module</th>
        <th>Downloads</th>
          </tr>
      </thead>
      <tbody >
      <tr *ngFor="let document of documents">
        <td> {{ document.filename }} </td>
        <td> {{ document.teacher }} </td>
        <td> {{ document.module_name }} </td>
        <td><a href="{{document.file ? document.file : ' '}}" style="color: red"> Download </a></td>
      </tr>
       
      </tbody>
    </table>
  </div>
</div>`
})
// src="{{document.file ? document.file : ' '}}"
// <a href="assets/downloads/student.csv">click here</a>.
// <tr *ngFor="let file of documents">
//         <td>{{ file.filename }}</td>
//           </tr>

export class StudentDocumentsComponent implements OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  documents:  Array<object> = [];
  user: any = {};
  userid: any = {};


  constructor(private profileService: ProfilepageService) { }

  ngOnInit() {
    this.dtOptions = {
      // pagingType: 'full_numbers',
      // pageLength: 10,
      dom: 'ftipr',
      buttons: [],
    };

    this.getDocuments();
    this.getUser();
  }

  public getUser() {
    this.profileService.getuser().subscribe((data: any) => {
      this.user = data[0];
      
      this.documents['user'] = this.user.id;
      this.userid = this.user.id
      
      // this.feedbacks.user = this.user.id;
      // this.feedbacks['user'] = this.user.id;
    });
  }
  public getDocuments() {
   
    this.profileService.getStudentDocuments().subscribe((data:  Array<object>) => {
      this.documents  =  data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
