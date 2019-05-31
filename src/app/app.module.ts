import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AddHeaderInterceptor } from './shared/jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutComponent } from './shared/login/logout.component';
import { VerifyEmailComponent } from './shared/login/verify_emailtoken.component';

//I keep the new line
// import { Globals } from './shared/globals';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    VerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    // Globals,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
