import { OnInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-film',
  templateUrl: 'filter-film.component.html',
})
export class FilterFilmComponent implements OnInit {

  film: any;
  filmId: any;
  link: any;

  constructor(private filmsService: FilmsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.filmId = this.router.snapshot.paramMap.get("id");

    this.filmsService.getFilmById(this.filmId)
      .subscribe(
        response => {
          this.film = response;
          console.log(this.film[0]);
        }
      );

    this.link = this.filmsService.getTrailers(this.filmId);

  }

}
