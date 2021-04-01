import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  films: any = [];

  constructor(private filmsService: FilmsService) { }

  // public films: Films[];

  ngOnInit() {
    this.filmsService.getFilms()
      .subscribe(
        response => {
          this.films = response,
            console.log(response);
        }
      )
  }

}
