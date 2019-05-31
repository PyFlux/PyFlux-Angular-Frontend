import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__organization'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class OrganizationComponent {
  fields = ['ID', 'Organization', 'Alias', 'Phone', 'Email', 'Website', 'Status'];
}
