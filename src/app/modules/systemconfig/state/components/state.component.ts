import { Component } from '@angular/core';

@Component({
  selector: 'app-state',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__state'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class StateComponent {
  fields = ['ID', 'State', 'Country', 'Status'];
}
