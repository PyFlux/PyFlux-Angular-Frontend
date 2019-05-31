import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

// import { Globals } from './../globals';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private  httpClient: HttpClient) {
  }

  login(user) {
    return this.httpClient.post<any>('/api-token-auth/', user).pipe(map(resp => {
      // login successful if there's a jwt token in the response
      if (resp && resp.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', resp.token);
        localStorage.setItem('username', resp.username);
        localStorage.setItem('user_type', resp.user_type);
        localStorage.setItem('fullname', resp.fullname);
        localStorage.setItem('user_id', resp.user_id);
        localStorage.setItem('sub_domain', resp.sub_domain);
        
        // this.globals.username = resp.username;
        // this.globals.email = resp.email;
      }

      return resp;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_type');
    // this.globals.username = '';
    // this.globals.email = '';
  }

  verifyEmail(key) {
    return this.httpClient.get(`/usermanagement/verifyemail/${key}`);
  }
}
