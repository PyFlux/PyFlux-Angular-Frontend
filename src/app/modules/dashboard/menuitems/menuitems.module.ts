import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { DataTablesModule } from 'angular-datatables';

import { MenuitemsRoutingModule } from './menuitems-routing.module';

import { NgSwitcheryComponent } from './components/switch.component';
import { HelpdocComponent } from './components/helpdoc.component';
import { GeneralSettingsComponent } from './components/generalsettings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuitemsRoutingModule,
    // DataTablesModule
  ],
  declarations: [
    NgSwitcheryComponent,
    HelpdocComponent,
    GeneralSettingsComponent,
    ]
})
export class MenuitemsModule { }
