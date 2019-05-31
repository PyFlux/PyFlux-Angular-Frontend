import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {

  constructor(private  httpClient:  HttpClient) {}
  saveGeneralSetting(params) {
    return this.httpClient.get('/dashboard/savegeneralsetting/', { params: params });
  }
  getGeneralSettings() {
    return this.httpClient.get('/dashboard/getgeneralsettings/');
  }
  // getMenuitems() {
  //   return this.httpClient.get('/dashboard/menuitems/');
  // }
  // getMenuitem(id) {
  //   return this.httpClient.get(`/dashboard/menuitems/${id}/`);
  // }
  // postMenuitem(menuitem) {
  //   return this.httpClient.post('/dashboard/menuitems/', menuitem);
  // }
  // updateMenuitem(id, menuitem) {
  //   return this.httpClient.patch(`/dashboard/menuitems/${id}/`, menuitem);
  // }
}
