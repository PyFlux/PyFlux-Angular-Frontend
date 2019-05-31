import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  template: `
    <app-toolbar-datatable [model_name]="'dashboard__Roles'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class RolesComponent {
  fields = ['id', 'Name', 'Status'];
}
