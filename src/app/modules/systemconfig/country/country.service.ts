import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private  httpClient:  HttpClient) {}

  getCountries() {
    return this.httpClient.get('/systemconfig/country/');
  }
  getCountry(id) {
    return this.httpClient.get(`/systemconfig/country/${id}/`);
  }
  postCountry(country) {
    return this.httpClient.post('/systemconfig/country/', country);
  }
  updateCountry(id, country) {
    return this.httpClient.patch(`/systemconfig/country/${id}/`, country);
  }
}
