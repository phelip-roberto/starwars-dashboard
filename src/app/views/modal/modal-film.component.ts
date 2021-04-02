import { OnInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-film',
  templateUrl: 'modal-film.component.html',
})
export class ModalFilmComponent implements OnInit {

  // film: any;

  // @Input()
  // display: boolean;

  // @Input()
  // id: any;

  constructor(private filmsService: FilmsService, private route: ActivatedRoute) { }


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.display.currentValue) {
  //     this.filmsService.getFilmById(this.id)
  //       .subscribe(
  //         response => {
  //           this.film = response,
  //             console.log(this.film);
  //         }
  //       )
  //   }
  // }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        let thing = params['thing'];
      });
  }


}

