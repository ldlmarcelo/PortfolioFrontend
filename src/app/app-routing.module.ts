import { EditSoftskillComponent } from './componentes/soft-skills/edit-softskill.component';
import { NewSoftskillComponent } from './componentes/soft-skills/new-softskill.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditExpComponent } from './componentes/experiencialaboral/edit-exp.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { NewExperienciaComponent } from './componentes/experiencialaboral/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExpComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'nuevSoftskill', component: NewSoftskillComponent },
  { path: 'editsoftskill/:id', component: EditSoftskillComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
