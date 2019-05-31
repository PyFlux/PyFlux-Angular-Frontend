import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailcredentialsService {

  constructor(private  httpClient:  HttpClient) {}

  getEmailcredentials() {
    return this.httpClient.get('/systemconfig/emailcredentials/');
  }
  getEmailcredential(id) {
    return this.httpClient.get(`/systemconfig/emailcredentials/${id}/`);
  }
  postEmailcredential(emailcredentials) {
    return this.httpClient.post('/systemconfig/emailcredentials/', emailcredentials);
  }
  updateEmailcredential(id, emailcredentials) {
    return this.httpClient.patch(`/systemconfig/emailcredentials/${id}/`, emailcredentials);
  }
}
