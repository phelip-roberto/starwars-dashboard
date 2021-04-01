import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  env = environment.api;

  constructor(private httpClient: HttpClient) { }

  getPeoples() {
    return this.httpClient.get(this.env + "/people");
  }
}
