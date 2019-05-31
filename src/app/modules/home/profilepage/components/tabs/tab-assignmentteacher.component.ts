import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilepageService } from '../../profilepage.service';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assignmentteacher',
  templateUrl: '../../pages/tabs/tab-assignmentteacher.component.html'
})

export class AssignmentteacherComponent implements OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  assignments: Array<object> = [];
  message: Array<object> = [];
  swal: any;
  student: any;
  active;
  studentId: string;
  table = $('#table').DataTable();
  constructor(private profileService: ProfilepageService) { }

  public status_change(assignment) {

    
    swal({
      title:"Change status",
      className:  'red-bg',
      buttons: {
        // Active: {
        //   text: "Active",
        //   className:  'red-bg',
        //   background :'#d33'
         
        // },
        // Inactive: {
        //   text: 'Inactive',
        //   html: 'red-bg"'
        // },
        InProgress: {
          text: 'InProgress',
          html: 'red-bg"'
        },
        Complete: {
          text: 'Complete',
          html: 'red-bg"'
        },
       
      }
    }).then((result) => {
      if (result) {
        if(result==='Assigned'){this.statusactive(assignment.student_id,assignment.id);}
        // if(result==='Inactive'){this.statusinactive(assignment.id);}
        if(result==='InProgress'){this.statusinprocess(assignment.student_id,assignment.id);}
        if(result==='Complete'){this.statuscompleted(assignment.student_id,assignment.id);}
      swal(
        'Changed!',
        'Your status has been changed.',
        'success'
      )
     
      }
    });
  }

  //   swal({
  //     title:"Change status",
  //     className:  'red-bg',
  //     buttons: {
  //       Active: {
  //         text: "Active",
  //         className:  'red-bg',
  //         background :'#d33'
         
  //       },
  //       Inactive: {
  //         text: 'Inactive',
  //         html: 'red-bg"'
  //       },
  //       InProgress: {
  //         text: 'InProgress',
  //         html: 'red-bg"'
  //       },
  //       Complete: {
  //         text: 'Complete',
  //         html: 'red-bg"'
  //       },
       
  //     }
  //   }).then((result) => {
  //     if (result) {
  //       if(result==='Active'){this.statusactive(assignment.id);}
  //       if(result==='Inactive'){this.statusinactive(assignment.id);}
  //       if(result==='InProgress'){this.statusinprocess(assignment.id);}
  //       if(result==='Complete'){this.statuscompleted(assignment.id);}
  //     swal(
  //       'Changed!',
  //       'Your status has been changed.',
  //       'success'
  //     )
     
  //     }
  //   });
  // }

  


  ngOnInit() {
    $.fn.dataTable.ext.errMode = 'none';
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'print'],
    };

    this.getAssignment();
  }

  public getAssignment() {
    this.profileService.getassignment().subscribe((data: Array<object>) => {
      this.assignments = data;
      this.message =data['message']
      if(!(this.assignments['message'])){
      this.studentId = this.assignments[0]['student_id']
      this.student  = this.assignments[0]['student_name']
      }
      // console.log(this.assignments[0]['student_name'])
      
      
      // this.student = 
      this.dtTrigger.next();
    });
  }
  public statusactive(student_id,assignment_id) {
    this.profileService.changeactivestatus(student_id,assignment_id).subscribe((data: Array<object>) => {
      this.active = data;
    });
    this.table.ajax.reload();
    this.getAssignment();
  }
  public statusinactive(student_id,assignment_id) {
    this.profileService.changeinactivestatus(student_id,assignment_id).subscribe((data: Array<object>) => {
      this.active = data;
    });
    this.table.ajax.reload();
    this.getAssignment();
  }
  public statusinprocess(student_id,assignment_id) {
    this.profileService.changeinprogressstatus(student_id,assignment_id).subscribe((data: Array<object>) => {
      this.active = data;
    });
    this.table.ajax.reload();
    this.getAssignment();
  }
  public statuscompleted(student_id,assignment_id) {
    this.profileService.changecompletedstatus(student_id,assignment_id).subscribe((data: Array<object>) => {
      this.active = data;
     
    });
    this.table.ajax.reload();
    this.getAssignment();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
