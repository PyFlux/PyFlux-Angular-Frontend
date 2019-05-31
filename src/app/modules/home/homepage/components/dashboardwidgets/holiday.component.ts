import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-dashboard-holiday',
    template: `
<div class="x_panel">
    <div class="x_title">
      <h2>Holidays</h2>
      <div class="clearfix"></div>
    </div>
    <div class="x_content" *ngIf="holidays?.length != 0">
      <article class="media event" *ngFor="let holiday of holidays">
        <a class="pull-left date">
          <p class="month">{{ holiday.start_date | date:'MMM' }}</p>
          <p class="day">{{ holiday.start_date | date:'dd' }}</p>
        </a>
        <div class="media-body">
          <a class="title" href="#">{{holiday.name}}</a>
          <p> There is no Class this day.</p>
          <p [innerHTML] = "holiday.remarks"></p>
        </div>
      </article>
    </div>
    <p *ngIf="holidays?.length == 0">No Holidays.</p>
  </div>`,
})

export class DashboardHolidayComponent {
    @Input() holidays;
}
