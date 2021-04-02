import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { FilmsComponent } from 'src/app/views/films/films.component';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from 'src/app/views/people/people.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ModalFilmComponent } from 'src/app/views/modal/modal-film.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FilmsComponent,
    PeopleComponent,
    ModalFilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule,
    DropdownModule,
    DialogModule
  ]
})
export class DefaultLayoutModule { }
