import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfilepageService } from '../../profilepage.service';
import { FeedbackmanagementsService } from '../../../../utils/feedbackmanagement/feedbackmanagement.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-feedback',
  template: `
  <div class="x_panel">
  <div class="x_title">
    <h2>Feedbacks</h2>
    <div class="clearfix"></div>
  </div>
  <div *ngIf="feedbacks.length > 0">
  <div class="x_content">
    <table id="table" class="table table-striped table-bordered" datatable [dtOptions]="dtOptions" [dtTrigger]="dtTrigger">
    <thead>
        <tr>
          <th>ID#</th>
          <th>From User</th>
          <th>Feedback</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let feedback of feedbacks">
          <td>{{ feedback.id }}</td>
          <td>{{ feedback.username }}</td>
          <td>{{ feedback.name}}</td>
          <td *ngIf ="feedback.status == 1">
            <button id=status1 class="btn btn-xs btn-default" (click)=status_change(feedback)><i class="fa fa-check"></i>
          Active</button></td>
          <td *ngIf ="feedback.status == 0">
            <button id=status0 class="btn btn-xs btn-default" (click)=status_change(feedback)><i class="fa fa-times"></i>
          Not Active</button></td>
          <td *ngIf ="feedback.status == 2">
            <button id=status2 class="btn btn-xs btn-default" (click)=status_change(feedback)><i class="fa fa-thumbs-up"></i>
          Resolved</button></td>
          <td *ngIf ="feedback.status == 3">
            <button id=status3 class="btn btn-xs btn-default" (click)=status_change(feedback)><i class="fa fa-spinner"></i>
          InProgress</button></td>
          <td *ngIf ="feedback.status == 4">
            <button id=status4 class="btn btn-xs btn-default" (click)=status_change(feedback)><i class="fa fa-thumbs-up"></i>
          Closed</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <div *ngIf="feedbacks.length == 0">
    <p style="color:slategray;font-size:20px;text-align: center">
          No feedbacks received
    </p>
  </div>
</div>`
})

export class FeedbacksComponent implements OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  feedbacks: Array<object> = [];

  user: any = {};

  swal: any;
  active;
  table = $('#table').dataTable( ).api()
  constructor(private profileService: ProfilepageService,
    private feedbackservice: FeedbackmanagementsService
  ) { }
  public status_change(feedback) {

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
        Resolved: {
          text: 'Resolved',
          html: 'red-bg"'
        },
        Closed: {
          text: 'Closed',
          html: 'red-bg"'
        },
      }
    }).then((result) => {
      if (result) {
        if (result === 'InProgress') {
          this.statusinprogress(feedback.id);
          alert('inprogress');

        }
        if (result === 'Resolved') {
          this.statusresolved(feedback.id);

        }
        if (result === 'Closed') {

          this.statusclosed(feedback.id);

        }
        // if(result==='Inactive'){this.statusinactive(assignment.id);}
        swal(
          'Changed!',
          'Your status has been changed.',
          'success'
        );

      }

    });

  }
  getData() {
    this.getFeedbacks();
    this.getUser();
  }
  ngOnInit() {
    $.fn.dataTable.ext.errMode = 'none';
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      aaSorting: [[0, 'desc']],
      // dom: 'Bfrtip',
      // buttons: ['copy', 'csv', 'print'],
    };

    this.getData();
  }

  public getFeedbacks() {
    this.profileService.getfeedbackuser().subscribe((data: Array<object>) => {
      this.feedbacks = data;
      this.dtTrigger.next();
    });
    // this.table.ajax.reload();

  }
  public getUser() {
    this.profileService.getuser().subscribe((data: any) => {
      this.user = data[0];
      // this.feedbacks.user = this.user.id;
      this.feedbacks['user'] = this.user.id;
      this.dtTrigger.next();
    });
    // this.table.ajax.reload();

  }
  public statusinprogress(feedback_id) {
    
    this.profileService.changefeedback(feedback_id,3).subscribe((data: Array<object>) => {
      this.active = data;
      this.getFeedbacks();
    });
    // $('#table').DataTable().ajax.reload();
    // this.table.ajax.reload();
    
  }
  public statusresolved(feedback_id) {
    
    this.profileService.changefeedback(feedback_id,2).subscribe((data: Array<object>) => {
      this.active = data;
      this.getFeedbacks();
    });
    
    // this.table.ajax.reload();
    
    
  }
  public statusclosed(feedback_id) {
    
    this.profileService.changefeedback(feedback_id,4).subscribe((data: Array<object>) => {
      this.active = data;
      this.getFeedbacks();
    });
    
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
