import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private  httpClient:  HttpClient) {}

  getRoles_dt(dataTablesParameters) {
    // alert(JSON.stringify(dataTablesParameters));
    dataTablesParameters.format = 'datatables';
    return this.httpClient.post<DataTablesResponse>(
      '/dashboard/roles/', // 'https://angular-datatables-demo-server.herokuapp.com/',
      dataTablesParameters, {}
    );
  }
  getRoles() {
    return this.httpClient.get('/dashboard/roles/');
  }
  getRole(id) {
    return this.httpClient.get(`/dashboard/roles/${id}/`);
  }
  postRole(role) {
    return this.httpClient.post('/dashboard/roles/', role);
  }
  updateRole(id, role) {
    return this.httpClient.patch(`/dashboard/roles/${id}/`, role);
  }
}
