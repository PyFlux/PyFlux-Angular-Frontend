import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private  httpClient:  HttpClient) {}

  getLanguages() {
    return this.httpClient.get('/systemconfig/languages/');
  }
  getLanguage(id) {
    return this.httpClient.get(`/systemconfig/languages/${id}/`);
  }
  postLanguage(languages) {
    return this.httpClient.post('/systemconfig/languages/', languages);
  }
  updateLanguage(id, languages) {
    return this.httpClient.patch(`/systemconfig/languages/${id}/`, languages);
  }
}
