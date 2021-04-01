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

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeoples()
      .subscribe(
        response => {
          this.fillData(response);
        }
      )
  }

  fillData(data) {
    this.totalRecords = data.length;
    this.peoples = data;
  }

}
