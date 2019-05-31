import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  constructor(private  httpClient:  HttpClient) {}

  getReligions() {
    return this.httpClient.get('/systemconfig/religion/');
  }
  getReligion(id) {
    return this.httpClient.get(`/systemconfig/religion/${id}/`);
  }
  postReligion(religion) {
    return this.httpClient.post('/systemconfig/religion/', religion);
  }
  updateReligion(id, religion) {
    return this.httpClient.patch(`/systemconfig/religion/${id}/`, religion);
  }
}
