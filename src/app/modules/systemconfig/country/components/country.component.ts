import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__country'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class CountryComponent {
  fields = ['ID', 'Country', 'Status'];
}

