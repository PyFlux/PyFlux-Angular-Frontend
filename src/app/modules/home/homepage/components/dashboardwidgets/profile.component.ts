import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-dashboard-profile',
    template: `
    <div class="col-xs-12 col-sm-6 col-md-4">

    <div class="x_panel" style="background-image:linear-gradient(to bottom right, #000099 57%, #66ccff 131%)">
      <div class="x_title">
        <h2 style="color: #fff">Profile</h2>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <img *ngIf="profile.media != '';else noimage" src="{{profile?.media }}" alt="">
        <ng-template #noimage>
          <img src='assets/images/user.png'>
        </ng-template>
        <!-- <img [src]="profile?.media != '' || 'assets/images/user.png'" class="img-thumbnail"> -->
        <br>
        <h3 class="text-center" >{{profile.first_name}} {{profile.last_name}}</h3>
        <!-- <p> Email: {{profile.student.email_id}}</p> -->
        <h4 class="text-center" *ngIf="profile?.student">Class: <strong>{{profile.student.myclass_name}}
            {{profile.student.myclass_division}}</strong></h4>
        <p class="text-center"> Email: {{profile.email}}</p>

        <ul class="list-inline widget_tally">
          <!-- <li *ngIf="profile?.student">
              <span class="month">Class: </span > {{profile.student.myclass_division}}
          </li> -->
          <!-- <li>
            <p>
              <span class="month">Email: </span>
              <span>{{profile.email}}</span>
            </p>
          </li> -->
          <li>
            <p>
              <span class="month">Phone: </span>
              <span>{{profile.personal_mobile_no}}</span>
            </p>
          </li>
          <li>
            <p>
              <span class="month">Date of Birth: </span>
              <span>{{profile.dob}}</span>
            </p>
          </li>

          <li *ngIf="profile?.student">
            <p>
              <span class="month" style="color:#E1E7E9">Admission Date: </span>
              <span style="color:#E1E7E9">{{profile.student.admission_date}}</span>
            </p>
          </li>
        </ul>
        <a class=" btn btn-default btn-xs pull-right" style="background-color:white"[routerLink]="'/home/profilepage/'">
          <i class="ti-eye"></i> View Profile</a>
      </div>
    </div>
  </div>
    `,
   styles: [
     '.x_content { color: #E1E7E9}',
     'img {width:200px; margin:auto; display:block}'
   ]
})

export class DashboardProfileComponent {
    @Input() profile;
}
