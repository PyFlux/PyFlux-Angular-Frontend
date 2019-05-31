import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetPermissionService {
  constructor(private  httpClient:  HttpClient) {}

  getRoleWidgets(roleid) {
    return this.httpClient.get('/dashboard/rolewidgets/?roleid=' + roleid);
  }
  // getWidgets(roleid) {
  //   return this.httpClient.get('/dashboard/widgets/?roleid=' + roleid);
  // }
}
