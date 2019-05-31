import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsconfigService {

  constructor(private  httpClient:  HttpClient) {}

  getSmsconfigs() {
    return this.httpClient.get('/systemconfig/smsconfig/');
  }
  getSmsconfig(id) {
    return this.httpClient.get(`/systemconfig/smsconfig/${id}/`);
  }
  postSmsconfig(smsconfig) {
    return this.httpClient.post('/systemconfig/smsconfig/', smsconfig);
  }
  updateSmsconfig(id, smsconfig) {
    return this.httpClient.patch(`/systemconfig/smsconfig/${id}/`, smsconfig);
  }
}
