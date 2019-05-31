import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  constructor(private  httpClient:  HttpClient) {}

  getOccupations() {
    return this.httpClient.get('/systemconfig/occupation/');
  }
  getOccupation(id) {
    return this.httpClient.get(`/systemconfig/occupation/${id}/`);
  }
  postOccupation(occupation) {
    return this.httpClient.post('/systemconfig/occupation/', occupation);
  }
  updateOccupation(id, occupation) {
    return this.httpClient.patch(`/systemconfig/occupation/${id}/`, occupation);
  }
}
