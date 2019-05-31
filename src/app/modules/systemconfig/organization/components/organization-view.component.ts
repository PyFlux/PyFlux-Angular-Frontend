import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-organization-view',
  templateUrl: '../pages/organization-view.component.html'
})
export class OrganizationViewComponent implements OnInit {
  loading = false;
  organization: any;

  constructor(
    private route: ActivatedRoute,
    private organizationsService:  OrganizationService
  ) { }

  public getOrganization() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.organizationsService.getOrganization(id).subscribe((data) => {
      this.organization = data;
      // console.log(this.organization);
      this.loading = false;
    });
  }
  ngOnInit() {
    // https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
    this.getOrganization();
  }

}
