import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private httpClient: HttpClient) {
  }

  getuserWidgets() {
    // if parent then show widgets of activechild
    return this.httpClient.get(`/dashboard/get_userwidgets/`);
  }

  getFullCalendarEvents() {
    return this.httpClient.get('/dashboard/get_fullcalendarevents/');
  }

  getUserBirthdays() {
    return this.httpClient.get('/dashboard/usersbirthdays/');
  }

  getReportWidgets() {
    return this.httpClient.get('/reports/reportwidgets/');
  }
}

