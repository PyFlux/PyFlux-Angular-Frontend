import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from './partials/toolbar.component';
import {DataTableComponent} from './datatables/datatable.component';
import {DataTablesModule} from 'angular-datatables';
import {ToolbarDatatableComponent} from './toolbar_datatable.component';
import { MatButtonModule, MatInputModule ,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatIconModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, RouterModule, DataTablesModule, MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    ],
  declarations: [
    ToolbarComponent,
    DataTableComponent,
    ToolbarDatatableComponent,
  ],
  exports: [
    ToolbarComponent,
    DataTableComponent,
    ToolbarDatatableComponent,
  ]
})


export class SharedModule {
}
