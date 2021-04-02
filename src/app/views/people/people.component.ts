import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {

  peoples: any = [];
  loading: boolean;
  totalRecords: any;
  episode_id: any;
  display: any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.display = false;

    this.peopleService.getPeoples()
      .subscribe(
        response => {
          this.fillData(response);
        }
      )
  }

  filterPersons(formData) {
    this.peopleService.filterGetPeoples(this.formatFilters(formData))
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
    this.peoples = data;
  }

  openModal(episode_id) {
    this.episode_id = episode_id;
    this.display = true;
  }

}
