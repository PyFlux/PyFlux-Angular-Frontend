import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__hobby'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class HobbiesComponent {
  fields = ['ID', 'Hobby', 'Status'];
}

