

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-view',
  templateUrl: '../pages/users-view.component.html'
})

export class UsersViewComponent implements OnInit {

  loading = false;
  user: Object = {};

  constructor(
    private route: ActivatedRoute,
    private usersService:  UsersService
  ) { }

  public getUser() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe((data:  Array<object>) => {
      this.user = data;
      this.loading = false;
    });
  }
  ngOnInit() {
    // https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
    this.getUser();
  }
}
