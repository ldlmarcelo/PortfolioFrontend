import { ExperienciaLaboralService } from 'src/app/service/experiencialaboral.service';
import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  logoExperiencia: string='';
  empExperiencia: string = '';
  puestoExperiencia: string ='';
  fechExperiencia: string='';
  descExperiencia: string = '';


  constructor(private experienciaServicio: ExperienciaLaboralService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new ExperienciaLaboral(
      this.logoExperiencia,
      this.empExperiencia,
      this.puestoExperiencia,
      this.fechExperiencia,
      this.descExperiencia);



      this.experienciaServicio.save(expe).subscribe(
      data => {
        alert("se agregó la nueva Experiencia Laboral");
        this.router.navigate(['']);
      }, err => {
        alert("Algo salió mal :(");
        this.router.navigate(['']);
      }
    );
  }

}
