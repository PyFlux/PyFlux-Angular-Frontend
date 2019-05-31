import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AclpermissionService {
  constructor(private  httpClient:  HttpClient) {}

  getAclpermissions(roleid) {
    return this.httpClient.get('/dashboard/dashboard_menus/?roleid=' + roleid);
  }
  postDashboardMenus(aclpermission) {
    // alert(aclpermission.user);
    return this.httpClient.post('/dashboard/dashboard_menus/', aclpermission);
  }
  getSubSubMenuDetails(id) {
    return this.httpClient.get('/dashboard/subsubmenudetails/?id=' + id);
  }
}
