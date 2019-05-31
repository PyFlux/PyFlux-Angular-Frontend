import { Component } from '@angular/core';

@Component({
  selector: 'app-nationality',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__nationality'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class NationalityComponent {
  fields = ['ID', 'Nationality', 'Status'];
}
