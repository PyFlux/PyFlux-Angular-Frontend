import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { WidgetPermissionRoutingModule } from './widgetpermission-routing.module';
import { WidgetPermissionComponent } from './components/widgetpermission.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    WidgetPermissionRoutingModule
  ],
  declarations: [
    WidgetPermissionComponent,
  ]
})
export class WidgetPermissionModule { }
