import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private  httpClient:  HttpClient) {}

  getStates() {
    return this.httpClient.get('/systemconfig/state/');
  }
  getState(id) {
    return this.httpClient.get(`/systemconfig/state/${id}/`);
  }
  postState(state) {
    return this.httpClient.post('/systemconfig/state/', state);
  }
  updateState(id, state) {
    return this.httpClient.patch(`/systemconfig/state/${id}/`, state);
  }
}
