import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { FilmsComponent } from 'src/app/views/films/films.component';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from 'src/app/views/people/people.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FilterFilmComponent } from 'src/app/views/film/filter-film.component';
import { InfoFilmComponent } from 'src/app/views/film/info-film.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FilmsComponent,
    PeopleComponent,
    FilterFilmComponent,
    InfoFilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    DropdownModule,
  ]
})
export class DefaultLayoutModule { }
