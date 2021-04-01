import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  env = environment.api;

  constructor(private httpClient: HttpClient) { }

  getFilms() {
    return this.httpClient.get(this.env + "/films");
  }
}
