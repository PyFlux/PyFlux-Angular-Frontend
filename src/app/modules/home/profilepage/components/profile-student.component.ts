import { Component,  OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';

import { ProfilepageService } from '../profilepage.service';
import { StudentreportsService } from '../../../reports/studentreports/studentreports.service';

@Component({
  selector: 'app-profilepage-student',
  templateUrl: '../pages/profile-student.component.html'
})

export class ProfileStudentComponent implements OnInit {
    profile: any;
    reports: any;
    studentid: any;
    userid: any;

    constructor(private profileService: ProfilepageService,
        private studentreportService: StudentreportsService) { }
    ngOnInit() {
        this.getProfile();
        this.getTermWisereports();
    }
    getProfile() {
        this.profileService.getProfile().subscribe((data: Array<object>) => {
          this.profile = data;
          this.studentid = this.profile['student']['id'];
          this.userid = this.profile['userprofile']['user'];
        });
    }

    getTermWisereports() {
        this.getProfile();
        // this.userid = this.profile['userprofile']['user'];
        this.studentreportService.getTermWisereports(this.userid).subscribe((data: Array<object>) => {
            this.reports = data;
        });
    }
    //   onTabSelect(data: TabDirective): void {
    //     console.log(data.heading);
    //   }

}

