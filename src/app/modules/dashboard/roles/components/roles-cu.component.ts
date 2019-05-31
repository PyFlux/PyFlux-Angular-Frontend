import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles-cu',
  templateUrl: '../pages/roles-cu.component.html'
})

export class RolesCuComponent implements OnInit {
  subsubmenu_id: string;
  rolesId: string;
  action_type = 'Save';
  loading = false;
  loading_frm = true; // used to hide edit form while fetching
  role: any = {};
  errors: any;

  constructor(
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      // this.subsubmenu_id = this.route.snapshot.queryParamMap.get('subsubmenu_id');
      this.role.status = '';
      this.rolesId = this.route.snapshot.paramMap.get('id');
      if (this.rolesId) {
        this.action_type = 'Update';
        this.loading_frm = false;
        this.rolesService.getRole(this.rolesId)
          .subscribe( data => {
            this.loading_frm = true; // show edit form
            this.role = data;
        });
      }
    }
  onSubmit(): void {
    this.loading = true;
    let httpService;
    // alert(this.action_type);
    if (this.action_type === 'Save') {
      httpService = this.rolesService.postRole(this.role);
    } else if (this.action_type === 'Update') {
      httpService = this.rolesService.updateRole(this.rolesId, this.role);
    }
    httpService.subscribe((response) => {
      // this.router.navigate(['/dashboard/roles/'], {queryParams: { subsubmenu_id: this.subsubmenu_id }});
      this.router.navigate(['/dashboard/roles/']);
    }, // success
    error => {
      this.errors = error;
      if (error['error']['name']) {
        if (error['error']['name'].indexOf('roles with this name already exists.') !== -1 ) {
          this.errors = {'error': 'Role already exists. Please provide a different name.'};
        }
      }
      this.loading = false;
    });
  }
}
