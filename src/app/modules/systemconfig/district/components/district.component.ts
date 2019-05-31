import { Component } from '@angular/core';

@Component({
  selector: 'app-district',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__district'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class DistrictComponent {
  fields = ['ID', 'District', 'Status'];
}

