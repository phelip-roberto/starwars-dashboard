import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-film',
  template: `
    <h4>{{film?.title}}</h4>

    <ul class="list-unstyled">
      <li><b>Director:</b> {{film?.director}}</li>
      <li><b>Producer:</b> {{film?.producer}}</li>
      <li><b>Release Date:</b> {{film?.release_date}}</li>
      <li><b>Opening Crawl:</b> {{film?.opening_crawl}}</li>
      <li><b>Characters:</b><ul class="list-inline"><li class="list-inline-item" *ngFor="let charac of film?.characters">{{charac}}</li></ul></li>
    </ul>
  `,
})
export class InfoFilmComponent implements OnInit {

  @Input() film = ''

  constructor() { }

  ngOnInit() {
  }

}
