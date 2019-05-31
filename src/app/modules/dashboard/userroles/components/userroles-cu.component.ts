import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserrolesService } from '../userroles.service';
import { RolesService } from '../../roles/roles.service';
import { UsersService } from '../../users/users.service';


@Component({
  selector: 'app-userroles-cu',
  templateUrl: '../pages/userroles-cu.component.html'
})

export class UserrolesCuComponent implements OnInit {
  userrolesId: string;
  action_type = 'Save';
  loading = false;
  loading_frm = true; // used to hide edit form while fetching
  userrole: any = {};
  errors: any;
  roles: any;
  users: any;

  constructor(
    private userrolesService: UserrolesService,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RolesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getRoles_and_Users();
    this.userrolesId = this.route.snapshot.paramMap.get('id');
    if (this.userrolesId) {
      this.action_type = 'Edit';
      this.loading_frm = false;
      this.userrolesService.getUserrole(this.userrolesId)
        .subscribe(data => {
          this.loading_frm = true; // show edit form
          this.userrole = data;
        });
    }
  }
  public getRoles_and_Users() {
    this.rolesService.getRoles().subscribe((data: Array<object>) => {
      this.roles = data;
    });
    this.usersService.getUsers().subscribe((data: Array<object>) => {
      this.users = data;
    });
  }
  onSubmit(): void {
    this.loading = true;
    let httpService;
    // alert(this.action_type);
    if (this.action_type === 'Save') {
      httpService = this.userrolesService.postUserrole(this.userrole);
    } else if (this.action_type === 'Edit') {
      httpService = this.userrolesService.updateUserrole(this.userrolesId, this.userrole);
    }
    httpService.subscribe((response) => {
      this.router.navigate(['/dashboard/userroles/']);
    }, // success
      error => {
        this.errors = error;
        if (error['error']['user']) {
          if (error['error']['user'].indexOf('This field must be unique.') !== -1 ) {
            this.errors = {'error': 'User already has a Role.'};
          }
        }
        this.loading = false;
      });
  }

}
