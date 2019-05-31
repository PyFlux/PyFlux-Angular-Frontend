import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmscredentialsService {

  constructor(private  httpClient:  HttpClient) {}

  getSmscredentials() {
    return this.httpClient.get('/systemconfig/smscredentials/');
  }
  getSmscredential(id) {
    return this.httpClient.get(`/systemconfig/smscredentials/${id}/`);
  }
  postSmscredential(smscredentials) {
    return this.httpClient.post('/systemconfig/smscredentials/', smscredentials);
  }
  updateSmscredential(id, smscredentials) {
    return this.httpClient.patch(`/systemconfig/smscredentials/${id}/`, smscredentials);
  }
}
