import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcercaDeComponent} from './componentes/acerca-de/acerca-de.component';
import {EducacionComponent} from './componentes/educacion/educacion.component';

const routes: Routes = [
  { path: 'acerca-de', component: AcercaDeComponent, pathMatch: 'full'},
  { path: 'educacion', component: EducacionComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

