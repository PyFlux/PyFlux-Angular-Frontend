import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__languages'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class LanguagesComponent {
  fields = ['ID', 'Language', 'Status'];
}

