import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-tab-buttons',
  template: `
<ul class="nav nav-tabs bar_tabs">
  <li role="presentation" [routerLinkActive]="['active']">
      <a [routerLink]="['/home/homepage/dashboard/']">Dashboard</a>
  </li>

  <li role="presentation" [routerLinkActive]="['active']">
      <a [routerLink]="['/home/homepage/calendar/']">Calendar</a>
  </li>

  <li role="presentation" [routerLinkActive]="['active']">
      <a [routerLink]="['/home/homepage/reports/']">Reports</a>
  </li>

  <li role="presentation" [routerLinkActive]="['active']">
      <a [routerLink]="['/home/homepage/instituteinfo/']">Institution Info</a>
  </li>
  <li role="presentation" [routerLinkActive]="['active']">
  <a [routerLink]="['/home/homepage/gallery/']">Gallery</a>
</li>

</ul>`
})

export class TabsComponent {
  // To show Tabs
  // @Input() profile: any;
}

