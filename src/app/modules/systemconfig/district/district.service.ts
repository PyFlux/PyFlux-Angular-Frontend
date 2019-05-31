import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private  httpClient:  HttpClient) {}

  getDistricts() {
    return this.httpClient.get('/systemconfig/district/');
  }
  getDistrict(id) {
    return this.httpClient.get(`/systemconfig/district/${id}/`);
  }
  postDistrict(district) {
    return this.httpClient.post('/systemconfig/district/', district);
  }
  updateDistrict(id, district) {
    return this.httpClient.patch(`/systemconfig/district/${id}/`, district);
  }
}
