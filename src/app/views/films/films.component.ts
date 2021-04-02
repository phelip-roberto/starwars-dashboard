import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  films: any = [];
  loading: boolean;
  totalRecords: any;
  display: boolean = false;
  episode_id: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {

    this.filmsService.getFilms()
      .subscribe(
        response => {
          this.films = response;
        }
      )
  }

  filterFilms(formData) {
    this.filmsService.filterGetFilms(this.formatFilters(formData))
      .subscribe(
        response => {
          this.fillData(response);
        }
      )
  }

  formatFilters(data) {
    let filter = "";

    if (data.name != "")
      filter = filter + "name=" + data.name + "&";

    if (data.gender != "")
      filter = filter + "gender=" + data.gender + "&";

    if (data.skin_color != "")
      filter = filter + "skin_color=" + data.skin_color + "&";

    return filter;
  }

  fillData(data) {
    this.totalRecords = data.length;
    this.films = data;
  }

  openModal(episode_id) {
    this.episode_id = episode_id;
    this.display = true;
  }

}
