import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
// import { RolesService } from '../../roles/roles.service';

@Component({
  selector: 'app-users-cu',
  templateUrl: '../pages/users-cu.component.html'
})

export class UsersCuComponent implements OnInit {
  usersId: string;
  action_type = 'Add';
  form_action = 'Save';
  loading = false;
  loading_frm = true; // used to hide edit form while fetching
  user: any = {};
  errors: any;
  roles: Array<object> = [];

  constructor(
    private usersService: UsersService,
    // private rolesservice: RolesService,
    private route: ActivatedRoute,
    private router: Router) { }

  // public getroles() {
  //   this.rolesservice.getRoles().subscribe((data: any) => {
  //     this.roles = data;
  //   });
  // }

  ngOnInit() {
    this.user.user_type = '';
    // this.user.role = '';
    // this.getroles();
    this.usersId = this.route.snapshot.paramMap.get('id');
    if (this.usersId) {
      this.action_type = 'Edit';
      this.form_action = 'Update';
      this.loading_frm = false;
      this.usersService.getUser(this.usersId)
        .subscribe(data => {
          this.loading_frm = true; // show edit form
          this.user = data;
        });
    }
  }
  onSubmit(): void {
    this.loading = true;
    let httpService;
    if (this.action_type === 'Add') {
      httpService = this.usersService.postUser(this.user);
    } else if (this.action_type === 'Edit') {
      httpService = this.usersService.updateUser(this.usersId, this.user);
    }

    httpService.subscribe((response) => {
      this.router.navigate(['/dashboard/users/']);
    }, // success
      error => {
        this.errors = error;
        if (error['error']['non_field_errors']) {
          if (error['error']['non_field_errors'].indexOf('The fields email must make a unique set.') !== -1) {
            this.errors = { 'error': 'Email already exists. Please provide a different email.' };
          }
        }
        this.loading = false;
      }
    );
  }

}
