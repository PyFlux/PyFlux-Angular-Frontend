import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../../../academics/assignment/assignment.service';

@Component({
    selector: 'app-homepage-dashboard-assignment',
    styleUrls: ['../../pages/assignment.component.css'],

    template: `
    <div class="x_panel">
    <div class="x_title">
    <h2> Assignment </h2>
    <div class="clearfix"></div>
    </div>

    <div *ngIf="assignments">
    <div *ngIf="assignments.length > 0">
        <ul class="list-unstyled scroll-view">
        <li class="media event" *ngFor="let assignment of assignments">

            <div class="media-body">
            <p><small>Assignment Name : {{assignment.name}}</small></p>
            <p> <small>Start Date: {{assignment.start_date | date }}</small></p>
            <p> <small>End Date: {{assignment.end_date }}</small></p>

            </div>
        </li>
        </ul>
    </div>
    </div>

    <p *ngIf="!assignments"> No Assignment.</p>
    <a *ngIf="assignments" [routerLink]="['/home/profilepage/assignmentteacher/']" class="btn btn-default btn-xs pull-right">More
    </a>
</div>
`
})

export class DashboardAssignmentComponent implements OnInit {
    assignments = {};

    constructor(
        private assignmentservice: AssignmentService,
    ) { }

    ngOnInit() {
        this.assignmentservice.getUserAssignment()
            .subscribe(data => {
                this.assignments = data;
                
            });
    }
}
