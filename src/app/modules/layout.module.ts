import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {DataTablesModule} from 'angular-datatables';

import {LayoutComponent} from './layout.component';
import {MenuComponent} from '../shared/partials/menu.component';
import {TopNavBarComponent} from '../shared/partials/topnavbar.component';
import {ToolbarComponent} from '../shared/partials/toolbar.component';
import {FooterComponent} from '../shared/partials/footer.component';

import {LayoutRoutingModule} from './layout-routing.module';
// import { HomePageComponent } from './homepage/home/components/home.component';

// import { HomePageComponent } from './home/home.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    MatMenuModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    MenuComponent,
    TopNavBarComponent,
    // ToolbarComponent,
    FooterComponent,
    // HomePageComponent
  ]
})
export class LayoutModule {
}
