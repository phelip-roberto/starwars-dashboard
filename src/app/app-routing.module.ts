import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FilmsComponent } from './views/films/films.component';
import { ModalFilmComponent } from './views/modal/modal-film.component';
import { PeopleComponent } from './views/people/people.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: PeopleComponent
      },
      {
        path: 'films',
        component: FilmsComponent
      },
      {
        path: 'film/:id',
        component: ModalFilmComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
