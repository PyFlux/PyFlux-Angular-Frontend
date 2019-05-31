import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilepageService } from '../../profilepage.service';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-teacherassignment',
  template: `
  <div class="x_panel">
  <div class="x_title">
    <h2>Assignment</h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content">
    <table class="table table-striped table-bordered" datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger">
      <thead>
        <tr>
          <th>ID#</th>
          <th>Name</th>
          <th>Start Date</th>
          <th>End date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let assignment of assignments">
          <td>{{ assignment.id }}</td>
          <td>{{ assignment.name }}</td>
          <td>{{ assignment.start_date}}</td>
          <td>{{ assignment.end_date }}</td>
          <td *ngIf ="assignment.status == 1">
            <button id=status1 class="btn btn-xs btn-default" (click)=status_change(assignment)><i class="fa fa-check"></i>
          Assigned</button></td>
          <td *ngIf ="assignment.status == 0">
            <button id=status2 class="btn btn-xs btn-default" (click)=status_change(assignment)><i class="fa fa-times"></i>
          Not Active</button></td>
          <td *ngIf ="assignment.status == 2">
            <button id=status3 class="btn btn-xs btn-default" (click)=status_change(assignment)><i class="fa fa-spinner"></i>
          In Progress</button></td>
          <td *ngIf ="assignment.status == 3">
            <button id=status4 class="btn btn-xs btn-default" (click)=status_change(assignment)>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
          Completed</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
})

export class TeacherassignmentComponent implements OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  assignments: Array<object> = [];
  swal: any;
  active;
  table = $('#table').DataTable();
  constructor(private profileService: ProfilepageService) { }

  public status_change(assignment) {

    // const swalWithBootstrapButtons = Swal.mixin({
    //   confirmButtonClass: 'btn btn-success',
    //   cancelButtonClass: 'btn btn-danger',
    //   buttonsStyling: false,
    // });
    // swal({buttons:[ { text:"save", type:"success", onClick:function(){ //do stuff } } ] }
    swal({
      title: 'Change status',
      className: 'red-bg',
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
      //   if (result === 'Assigned') { this.statusactive(assignment.id); }
      //   // if(result==='Inactive'){this.statusinactive(assignment.id);}
      //   if (result === 'InProgress') { this.statusinprocess(assignment.id); }
      //   if (result === 'Complete') { this.statuscompleted(assignment.id); }
        swal(
          'Changed!',
          'Your status has been changed.',
          'success'
        );

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
     
      this.dtTrigger.next();
    });
  }
  // public statusactive(assignment_id) {
  //   this.profileService.changeactivestatus(assignment_id).subscribe((data: Array<object>) => {
  //     this.active = data;
  //   });
  //   this.table.ajax.reload();
  // }
  // public statusinactive(assignment_id) {
  //   this.profileService.changeinactivestatus(assignment_id).subscribe((data: Array<object>) => {
  //     this.active = data;
  //   });
  //   this.table.ajax.reload();
  //   this.getAssignment();
  // }
  // public statusinprocess(assignment_id) {
  //   this.profileService.changeinprogressstatus(assignment_id).subscribe((data: Array<object>) => {
  //     this.active = data;
  //   });
  //   this.table.ajax.reload();
  //   this.getAssignment();
  // }
  // public statuscompleted(assignment_id) {
  //   this.profileService.changecompletedstatus(assignment_id).subscribe((data: Array<object>) => {
  //     this.active = data;
  //   });
  //   this.table.ajax.reload();
  //   this.getAssignment();
  // }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
