import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { FilmsComponent } from 'src/app/views/films/films.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeopleComponent } from 'src/app/views/people/people.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    FilmsComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TableModule
  ]
})
export class DefaultLayoutModule { }
