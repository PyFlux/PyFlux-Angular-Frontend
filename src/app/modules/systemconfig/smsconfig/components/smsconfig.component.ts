import { Component } from '@angular/core';

@Component({
  selector: 'app-smsconfig',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__smsconfig'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class SmsconfigComponent {
  fields = ['ID', 'Per Day', 'Per Month', 'Status'];
}

