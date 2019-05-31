import { Component } from '@angular/core';

@Component({
  selector: 'app-citytown',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__citytown'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class CitytownComponent {
  fields = ['ID', 'City', 'State', 'Country', 'Status'];
}

