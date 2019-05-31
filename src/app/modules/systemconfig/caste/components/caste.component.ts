import { Component } from '@angular/core';

@Component({
  selector: 'app-caste',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__caste'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class CasteComponent {
  fields = ['ID', 'Religion', 'Caste', 'Status'];
}

