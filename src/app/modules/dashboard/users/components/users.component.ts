import { Component } from '@angular/core';
// import { GlobalService } from '../../../../shared/global.service';
@Component({
  selector: 'app-users',
  templateUrl: '../pages/users.component.html'
})

export class UsersComponent {
  fields = ['id', 'First Name', 'Username', 'Email', 'Status'];
  constructor() { }

}
