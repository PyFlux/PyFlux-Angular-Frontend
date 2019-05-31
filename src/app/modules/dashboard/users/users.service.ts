import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private  httpClient:  HttpClient) {}

  getUsers() {
    return this.httpClient.get('/dashboard/users/');
  }
  getUser(id) {
    return this.httpClient.get(`/dashboard/users/${id}/`);
  }
  getUserprofile(id) {
    return this.httpClient.get(`dashboard/userprofiles/${id}/`);
  }
  postUser(user) {
    return this.httpClient.post('/dashboard/users/', user);
  }
  updateUser(id, user) {
    return this.httpClient.patch(`/dashboard/users/${id}/`, user);
  }
}
