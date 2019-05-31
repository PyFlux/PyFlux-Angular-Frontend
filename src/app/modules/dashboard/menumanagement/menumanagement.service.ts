import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenumanagementService {

  constructor(private  httpClient:  HttpClient) {}

  // getMenumanagements() {
  //   return this.httpClient.get('/dashboard/menumanagement/');
  // }
  // getMenumanagement(id) {
  //   return this.httpClient.get(`/dashboard/menumanagement/${id}/`);
  // }
  postMenumanagement(menus) {
    return this.httpClient.post('/dashboard/syncmenus/', menus);
  }
  // updateMenumanagement(id, menumanagement) {
  //   return this.httpClient.patch(`/dashboard/menumanagement/${id}/`, menumanagement);
  // }
}
