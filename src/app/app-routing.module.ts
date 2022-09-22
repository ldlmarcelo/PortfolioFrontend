import { EditarPersonaComponent } from './componentes/acerca-de/editar-persona.component';
import { NewHardskillComponent } from './componentes/hard-skills/new-hardskill.component';
import { EditHardskillComponent } from './componentes/hard-skills/edit-hardskill.component';
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
  { path: 'editsoftskill/:id', component: EditSoftskillComponent},
  { path: 'nuevHardskill', component: NewHardskillComponent},
  { path: 'edithardskill/:id', component: EditHardskillComponent},
  { path: 'editperso/:id', component: EditarPersonaComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
