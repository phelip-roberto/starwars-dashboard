import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Films } from '../classes/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  env = environment.api;

  constructor(private httpClient: HttpClient) { }

  // getFilms(): Observable<Films[]> {
  //   return this.httpClient.get<Films[]>(this.env + "/films");
  // }

  getFilms() {
    return this.httpClient.get(this.env + "/films");
  }
}
