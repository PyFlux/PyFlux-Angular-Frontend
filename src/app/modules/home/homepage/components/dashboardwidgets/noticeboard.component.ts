import { Component, OnInit } from '@angular/core';
import { NoticeBoardService } from '../../../../events/noticeboard/noticeboard.service';

@Component({
    selector: 'app-homepage-dashboard-noticeboard',
    styleUrls: ['../../pages/noticeboard.component.css'],
    template: `
    <div class="x_panel">
        <div class="x_title">
           <h2>Noticeboard</h2>
           
            <div class="clearfix"></div>
        </div>

        <div *ngIf="noticeboards?.length > 0" >
            <div class="x_content" >
                <article class="media event" *ngFor="let noticeboard of noticeboards">
                <a class="pull-left date" style ="background-color:lightgrey" >
                    <p class="month" style="color:red" >{{ noticeboard.start_date | date:'MMM' }}</p>
                    <p class="day" style="color:red" >{{ noticeboard.start_date | date:'dd'}}</p>
                </a>
                <div class="media-body">
                    <a class="title" style="color:red" > {{ noticeboard.title }} </a>
                    <p style="color:orange" [innerHTML] = "noticeboard.description"> 
                    </p>
                </div>
                </article>
            </div>
        </div>
        <div *ngIf="noticeboards?.length == 0">
            <p> Nothing To Display </p>
        </div>
    </div>`,
})

export class DashboardNoticeboardComponent implements OnInit {
    noticeboards: any;

    constructor(
        private noticeboardservice: NoticeBoardService,
    ) { }

    ngOnInit() {
        this.noticeboardservice.getNoticeBoards()
            .subscribe(data => {
                this.noticeboards = data;
                
            });
    }
}
