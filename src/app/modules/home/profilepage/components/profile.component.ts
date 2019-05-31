import { Component } from '@angular/core';

@Component({
  selector: 'app-profilepage-profile',
  template: `
<ng-container [ngSwitch]="user_type">
  <app-profilepage-student *ngSwitchCase="'S'"></app-profilepage-student>
  <app-profilepage-parent *ngSwitchCase="'P'"></app-profilepage-parent>
  <app-profilepage-other *ngSwitchDefault></app-profilepage-other>
</ng-container>`
})

export class ProfileComponent {
  user_type = localStorage.getItem('user_type');
}
