import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitytownService {

  constructor(private  httpClient:  HttpClient) {}

  getCitytowns() {
    return this.httpClient.get('/systemconfig/citytown/');
  }
  getCitytown(id) {
    return this.httpClient.get(`/systemconfig/citytown/${id}/`);
  }
  postCitytown(citytown) {
    return this.httpClient.post('/systemconfig/citytown/', citytown);
  }
  updateCitytown(id, citytown) {
    return this.httpClient.patch(`/systemconfig/citytown/${id}/`, citytown);
  }
}
