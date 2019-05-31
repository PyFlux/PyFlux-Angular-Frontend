import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            // { path: '', redirectTo: '', pathMatch: 'prefix' },
            { path: 'users', loadChildren: './users/users.module#UsersModule'},
            { path: 'roles', loadChildren: './roles/roles.module#RolesModule'},
            { path: 'userroles', loadChildren: './userroles/userroles.module#UserrolesModule'},
            { path: 'aclpermission', loadChildren: './aclpermission/aclpermission.module#AclpermissionModule'},
            { path: 'widgetpermission', loadChildren: './widgetpermission/widgetpermission.module#WidgetPermissionModule'},
            { path: 'menuitems', loadChildren: './menuitems/menuitems.module#MenuitemsModule'},
            { path: 'menumanagement', loadChildren: './menumanagement/menumanagement.module#MenumanagementModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
