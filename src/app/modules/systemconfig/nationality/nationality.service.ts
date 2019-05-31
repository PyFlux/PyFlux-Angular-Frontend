import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(private  httpClient:  HttpClient) {}

  getNationalities() {
    return this.httpClient.get('/systemconfig/nationality/');
  }
  getNationality(id) {
    return this.httpClient.get(`/systemconfig/nationality/${id}/`);
  }
  postNationality(nationality) {
    return this.httpClient.post('/systemconfig/nationality/', nationality);
  }
  updateNationality(id, nationality) {
    return this.httpClient.patch(`/systemconfig/nationality/${id}/`, nationality);
  }
}
