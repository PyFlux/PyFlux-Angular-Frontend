import { Component } from '@angular/core';

@Component({
  selector: 'app-emailcredentials',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__emailcredentials'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class EmailcredentialsComponent {
  fields = ['ID', 'User Name', 'Status'];
}

