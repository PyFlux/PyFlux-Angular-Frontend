import { Component } from '@angular/core';

@Component({
  selector: 'app-religion',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__religion'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class ReligionComponent {
  fields = ['ID', 'Religion', 'Status'];
}

