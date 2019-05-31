import { Component } from '@angular/core';

@Component({
  selector: 'app-occupation',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__occupation'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class OccupationComponent {
  fields = ['ID', 'Occupation', 'Status'];
}

