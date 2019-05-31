import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserrolesService {

  constructor(private  httpClient:  HttpClient) {}

  getUserroles() {
    return this.httpClient.get('/dashboard/userroles/');
  }
  /*
  getRoles_and_Users() {
    return this.httpClient.get('/dashboard/roles_and_users/');
  }
  */
  getUserrole(id) {
    return this.httpClient.get(`/dashboard/userroles/${id}/`);
  }
  postUserrole(userrole) {
    return this.httpClient.post('/dashboard/userroles/', userrole);
  }
  updateUserrole(id, userrole) {
    return this.httpClient.patch(`/dashboard/userroles/${id}/`, userrole);
  }
}
