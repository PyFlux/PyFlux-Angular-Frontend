import { Component, OnInit } from '@angular/core';
import { AclpermissionService } from '../aclpermission.service';
import { RolesService } from '../../roles/roles.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aclpermission',
  templateUrl: '../pages/aclpermission.component.html'
})

export class AclpermissionComponent implements OnInit {

  menus: any = [];
  loading = false;
  loading_frm; // used to hide edit form while fetching
  permissions_updated = false; // used to show permissions updated message.
  roleId: string;
  roles: Array<object> = [];

  constructor(private route: ActivatedRoute,
    private aclpermissionService: AclpermissionService,
    private toastr: ToastrService,
    private rolesService: RolesService) { }

  ngOnInit() {
    this.getRoles();
    this.roleId = this.route.snapshot.queryParamMap.get('roleid'); // this.route.snapshot.paramMap.get('roleid');
    if (this.roleId) {
      this.loadAclForm();
    }
  }

  public getRoles() {
    this.loading = true;
    this.rolesService.getRoles().subscribe((data: Array<object>) => {
      this.roles = data;
      this.loading = false;
    });
  }

  public JquerypropCheckbox(item_name, event) {
    // $(item_name).not(event.target).prop('checked', event.target.checked);
    $(item_name).prop('checked', event.target.checked);
  }
  loadAclForm() {
    this.loading_frm = false;
    this.aclpermissionService.getAclpermissions(this.roleId)
      .subscribe(data => {
        // this.loading_frm = true; // show edit form
        this.menus = data;
        this.loading_frm = true;
        // this.aclpermission = data;
      });
  }

  OnCheckBoxAllChange(e: any) {
    this.JquerypropCheckbox('.acl_permissions_panel input:checkbox', e);
    this.onSubmit(e, { 'role': this.roleId }, 'all');

  }
  OnCheckBoxViewAllChange(e: any) {
    this.JquerypropCheckbox('.acl_permissions_panel .view_chk', e);
    this.onSubmit(e, { 'role': this.roleId }, 'view_all');
  }

  OnCheckBoxAddAllChange(e: any) {
    this.JquerypropCheckbox('.acl_permissions_panel .add_chk', e);
    this.onSubmit(e, { 'role': this.roleId }, 'add_all');
  }
  OnCheckBoxEditAllChange(e: any) {
    this.JquerypropCheckbox('.acl_permissions_panel .edit_chk', e);
    this.onSubmit(e, { 'role': this.roleId }, 'edit_all');
  }
  OnCheckBoxDeleteAllChange(e: any) {
    this.JquerypropCheckbox('.acl_permissions_panel .delete_chk', e);
    this.onSubmit(e, { 'role': this.roleId }, 'delete_all');
  }
  OnCheckBoxRowChange(e: any, data) {
    $('input:checkbox', $(e.target).parent().parent()).prop('checked', e.target.checked);
    this.onSubmit(e, data, 'row_change');
  }
  onBlurMethod(e, data): void {
    this.onSubmit(e, data, 'ordering');
  }
  onSubmit(e, data, chk_type = 'view'): void {
    if (chk_type === 'ordering') {
      data.check_box = e.target.value;
    } else {
      data.check_box = e.target.checked;
    }

    data.chk_type = chk_type;
    this.loading = true;
    this.aclpermissionService.postDashboardMenus(data)
      .subscribe((response) => {
        // this.router.navigate(['/dashboard/aclpermission/']);
        this.loading = false;
        this.permissions_updated = true;
        // alert('Updated Succesfully');
        this.toastr.success('Success..!', 'Permissions Updated Succesfully.');
      }, // success
        error => {
          this.loading = false;
        });
  }
}
