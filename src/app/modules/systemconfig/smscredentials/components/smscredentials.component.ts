import { Component } from '@angular/core';

@Component({
  selector: 'app-smscredentials',
  template: `
    <app-toolbar-datatable [model_name]="'systemconfig__smscredentials'" [fields]="fields">
    </app-toolbar-datatable>`
})

export class SmscredentialsComponent {
  fields = ['ID', 'name','sender','api_key','request_url','status'];
}

