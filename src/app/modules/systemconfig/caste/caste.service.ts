import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasteService {

  constructor(private  httpClient:  HttpClient) {}

  getCastes() {
    return this.httpClient.get('/systemconfig/caste/');
  }
  getCaste(id) {
    return this.httpClient.get(`/systemconfig/caste/${id}/`);
  }
  postCaste(caste) {
    return this.httpClient.post('/systemconfig/caste/', caste);
  }
  updateCaste(id, caste) {
    return this.httpClient.patch(`/systemconfig/caste/${id}/`, caste);
  }
}
