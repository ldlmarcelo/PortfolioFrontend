import { EditExpComponent } from './componentes/experiencialaboral/edit-exp.component';
import { NewExperienciaComponent } from './componentes/experiencialaboral/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path: 'editexp',component: EditExpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

