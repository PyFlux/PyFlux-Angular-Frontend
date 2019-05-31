import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeCuComponent } from '../modules/hr/employee/components/employee-cu.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,    
  ],
  declarations: [
    EmployeeCuComponent
  ],
  exports: [
    EmployeeCuComponent
  ]
})


export class EmployeeTeacherModule {
}
