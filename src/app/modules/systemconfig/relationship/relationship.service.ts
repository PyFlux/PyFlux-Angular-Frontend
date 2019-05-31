import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(private  httpClient:  HttpClient) {}

  getRelationships() {
    return this.httpClient.get('/systemconfig/relationship/');
  }
  getRelationship(id) {
    return this.httpClient.get(`/systemconfig/relationship/${id}/`);
  }
  postRelationship(relationship) {
    return this.httpClient.post('/systemconfig/relationship/', relationship);
  }
  updateRelationship(id, relationship) {
    return this.httpClient.patch(`/systemconfig/relationship/${id}/`, relationship);
  }
}
