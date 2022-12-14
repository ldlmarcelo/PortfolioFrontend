
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencialaboral/new-experiencia.component';
import { EditExpComponent } from './componentes/experiencialaboral/edit-exp.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSoftskillComponent } from './componentes/soft-skills/new-softskill.component';
import { EditSoftskillComponent} from './componentes/soft-skills/edit-softskill.component';
import { NewHardskillComponent } from './componentes/hard-skills/new-hardskill.component';
import { EditHardskillComponent } from './componentes/hard-skills/edit-hardskill.component';
import { EditarPersonaComponent } from './componentes/acerca-de/editar-persona.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExpComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSoftskillComponent,
    EditSoftskillComponent,
    HardSkillsComponent,
    NewHardskillComponent,
    EditHardskillComponent,
    EditarPersonaComponent,
    NewProyectoComponent,
    EditProyectoComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
