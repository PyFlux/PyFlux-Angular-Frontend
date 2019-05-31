import { Component } from '@angular/core';

@Component({
  selector: 'app-emailconfig',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__emailconfig'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class EmailconfigComponent {
  fields = ['ID', 'Per Day', 'Per Month', 'Status'];
}


