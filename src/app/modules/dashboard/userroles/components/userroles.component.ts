import { Component } from '@angular/core';

@Component({
  selector: 'app-userroles',
  template: `
  <app-toolbar-datatable [model_name]="'dashboard__UserRoles'" [fields]="fields"></app-toolbar-datatable>`
})

export class UserrolesComponent {
  fields = ['id', 'First Name', 'User Name', 'Role', 'Status'];
}
