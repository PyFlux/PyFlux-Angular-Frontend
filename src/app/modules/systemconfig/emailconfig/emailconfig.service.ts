import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailconfigService {

  constructor(private  httpClient:  HttpClient) {}

  getEmailconfigs() {
    return this.httpClient.get('/systemconfig/emailconfig/');
  }
  getEmailconfig(id) {
    return this.httpClient.get(`/systemconfig/emailconfig/${id}/`);
  }
  postEmailconfig(emailconfig) {
    return this.httpClient.post('/systemconfig/emailconfig/', emailconfig);
  }
  updateEmailconfig(id, emailconfig) {
    return this.httpClient.patch(`/systemconfig/emailconfig/${id}/`, emailconfig);
  }
}
