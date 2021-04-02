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

  filterGetFilms(filters) {
    return this.httpClient.get(this.env + "/films?" + filters);
  }

  getFilmById(id) {
    return this.httpClient.get(this.env + "/films?episode_id=" + id)
  }

  getTrailers(id) {
    let link = ""

    if (id == 1)
      link = "https://www.youtube.com/watch?v=bD7bpG-zDJQ";

    if (id == 2)
      link = "https://www.youtube.com/watch?v=gYbW1F_c9eM";

    if (id == 3)
      link = "https://www.youtube.com/watch?v=5UnjrG_N8hU";

    if (id == 4)
      link = "https://www.youtube.com/watch?v=vZ734NWnAHA";

    if (id == 5)
      link = "https://www.youtube.com/watch?v=JNwNXF9Y6kY";

    if (id == 6)
      link = "https://www.youtube.com/watch?v=XgB4gaY2dWE";

    if (id == 7)
      link = "https://www.youtube.com/watch?v=sGbxmsDFVnE";

    return link;
  }

}
