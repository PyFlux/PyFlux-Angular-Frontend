import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';
// import { ProfilepageService } from '../../profilepage/profilepage.service';

import { Router, ActivatedRoute } from '@angular/router';
// import { AssignmentService } from '../../../academics/assignment/assignment.service';


@Component({
    selector: 'app-homepage-dashboard',
    templateUrl: '../pages/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    widgets = [];
    widgets_data = {};
    loading = false;
    userid = [];
    user_type = localStorage.getItem('user_type');
    spiderwebgraph: any;
    guagegraph: any;
    // activechild = localStorage.getItem('activechild');

    constructor(
        private homeService: HomepageService,
        // private noticeboardservice: NoticeBoardService,
        // private assignmentservice: AssignmentService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.loading = true;
        this.getuserWidgets();
        // this.getassignments();

        // this.noticeboardservice.getNoticeBoards()
        //     .subscribe(data => {
        //         this.noticeboards = data;
        //     });
    }

    public getuserWidgets() {
        // let activestudent = 'first';
        // if (this.activechild){
        //     activestudent = this.activechild;
        // }
        
        this.homeService.getuserWidgets().subscribe((data: Array<object>) => {
            this.loading = false;
            this.widgets = data['widgets'];
            // if (data['guagegraph']) {
                this.guagegraph = data['guagegraph'];
                this.spiderwebgraph = data['spiderwebgraph'];
            // }

            for (const w of this.widgets) {
                this.widgets_data[w] = data[w];
            }
        });
    }

}
