import { Component } from '@angular/core';

@Component({
  selector: 'app-relationship',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__relationship'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class RelationshipComponent {
  fields = ['ID', 'Relationship', 'Status'];
}

