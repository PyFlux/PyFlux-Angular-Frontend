import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-dashboard-fees',
    template: `
<div class="x_panel" style= "background: linear-gradient(to bottom right, #003366 -35%, #66ccff 104%)">
    <div class="x_title">
    <h2 style="color:#E1E7E9">Fees</h2>
    <div class="clearfix"></div>
    </div>
    <ul class="list-unstyled scroll-view">
    <li class="media event" *ngFor="let fee of fees">
        <div class="media-body">
        <p style="color:#E1E7E9 "><strong>{{fee.name}}</strong></p>
        <p style="color:#E1E7E9"><strong>{{fee.amount | currency: 'INR'}} - </strong>{{fee.description}} </p>
        <p style="color:#E1E7E9"> <small>Due Date: {{fee.category_due_date | date }}</small></p>
        <p style="color:#E1E7E9"> <small>Category: {{fee.category_name }}</small></p>
        </div>
    </li>
    </ul>
    <p *ngIf="fees?.length == 0" style="color:#E1E7E9"> No Fees .</p>
    <a [routerLink]="['/home/profilepage/feetransactions/']" class="btn btn-default btn-xs pull-right" >My
    Transactions</a>
</div>`,
})


export class DashboardFeesComponent {
    @Input() fees;
}
