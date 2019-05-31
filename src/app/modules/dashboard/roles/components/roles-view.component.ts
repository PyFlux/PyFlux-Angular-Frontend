

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from '../roles.service';


@Component({
  selector: 'app-roles-view',
  templateUrl: '../pages/roles-view.component.html'
})

export class RolesViewComponent implements OnInit {

  loading = false;
  role: Object = {};

  constructor(
    private route: ActivatedRoute,
    private rolesService:  RolesService
  ) { }

  public getRole() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.rolesService.getRole(id).subscribe((data:  Array<object>) => {
      this.role = data['widget'];
      this.loading = false;
    });
  }
  ngOnInit() {
    // https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
    this.getRole();
  }
}
