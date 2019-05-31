import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private  httpClient:  HttpClient) {}

  getHobbies() {
    return this.httpClient.get('/systemconfig/hobby/');
  }
  getHobby(id) {
    return this.httpClient.get(`/systemconfig/hobby/${id}/`);
  }
  postHobby(hobby) {
    return this.httpClient.post('/systemconfig/hobby/', hobby);
  }
  updateHobby(id, hobby) {
    return this.httpClient.patch(`/systemconfig/hobby/${id}/`, hobby);
  }
}
