import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../roles/roles.service';
import { WidgetPermissionService } from '../widgetpermission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-dashboard-widgetpermission',
    templateUrl: '../pages/widgetpermission.component.html'
})
export class WidgetPermissionComponent implements OnInit {
    roles: Array<object> = [];
    widgets: Array<object> = [];
    loading = false;
    rolewidgets: any;
    roleId: string;

    constructor(
        private toastr: ToastrService,
        private rolesService: RolesService,
        private widgetpermissionService: WidgetPermissionService) { }

    ngOnInit() {
        this.getRoles();
    }

    public getRoles() {
        this.loading = true;
        this.rolesService.getRoles().subscribe((data: Array<object>) => {
            this.roles = data;
            this.loading = false;
        });
    }
    // public getWidgets() {
    // }
    onRoleChange() {
        this.widgetpermissionService.getRoleWidgets(this.roleId).subscribe((data: Array<object>) => {
            this.widgets = data;
            this.loadMultiSelect();
        });
    }
    loadMultiSelect() {
        this.loading = true;
        this.rolesService.getRole(this.roleId).subscribe((data) => {
            this.rolewidgets = data['widgets'];
            this.loading = false;
        });
    }
    changed(evt, item) {
        const ischecked = evt.target.checked;
        const index = this.rolewidgets.indexOf(item);
        if (ischecked) {
            if (index === -1) {
                // if item not in array
                // console.log(ischecked, item);
                this.rolewidgets.push(item);
            }
        } else {
            if (index > -1) {
                this.rolewidgets.splice(index, 1);
            }
        }

    }
    saveRolewidgets() {
        this.loading = true;
        this.rolesService.updateRole(this.roleId, {'widgets': this.rolewidgets}).subscribe((response) => {
            this.loading = false;
            this.toastr.success('Success..!', 'Widgets updated succssfully.');
        }, // success
        error => {
            this.loading = false;
            this.toastr.error('Error!', error);
        });
    }
}
