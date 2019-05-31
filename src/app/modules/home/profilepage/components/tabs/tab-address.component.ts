import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profilepage-tab-address',
  template: ` 
  <div class="row">
  <div class="col-md-4 col-sm-12" *ngFor="let address of profile?.userprofile?.addresses">
      <div class="panel panel-default">
          <div class="panel-heading" [ngSwitch]="address.addresstype">
            <ng-container *ngSwitchCase="'p'">Permanent Address</ng-container>
            <ng-container *ngSwitchCase="'t'">Temporary Address</ng-container>
            <ng-container *ngSwitchCase="'o'">Office Address</ng-container>
            <ng-container *ngSwitchCase="'h'">Home Address</ng-container>
            <ng-container *ngSwitchDefault>Other</ng-container>
          </div>
          <div class="panel-body">
              <address>
                  <strong>{{ address.address }}</strong><br>
                  {{ address.city_name }}<br>
                  {{ address.district_name }}<br>
                  {{ address.state_name }}<br>
                  {{ address.zipcode }}<br>
              </address>
          </div>
      </div>
  </div>
</div>`
})

export class ProfileTabAddressComponent {
  // Used by profile-others.component.ts & profile-student.component.ts
  @Input() profile: any;
}
