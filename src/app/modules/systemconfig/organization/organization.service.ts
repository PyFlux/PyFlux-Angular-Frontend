import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private httpClient: HttpClient) { }

  getOrganizations() {
    return this.httpClient.get('/systemconfig/organization/');
  }
  getOrganization(id) {
    return this.httpClient.get(`/systemconfig/organization/${id}/`);
  }
  postOrganization(organization) {
    return this.httpClient.post('/systemconfig/organization/', organization);
  }
  updateOrganization(id, organisation) {
    return this.httpClient.patch(`/systemconfig/organization/${id}/`, organisation);
  }
  getactiveorganization() {
    return this.httpClient.get('/systemconfig/getactiveorganization/');
  }


}
