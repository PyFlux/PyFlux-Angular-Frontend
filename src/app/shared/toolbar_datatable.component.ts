import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-datatable',
  template: `
  <app-toolbar [model_name]="model_name"></app-toolbar>
  <app-datatable [model_name]="model_name" [fields]="fields"></app-datatable>
  `
})

export class ToolbarDatatableComponent {
    @Input() model_name: string;
    @Input() fields;
}
