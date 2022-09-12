import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboralService } from 'src/app/service/experiencialaboral.service';
import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
expLaboral: ExperienciaLaboral=null;
public modificarExperiencia: ExperienciaLaboral | undefined;


  constructor(private experienciaServicio: ExperienciaLaboralService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.experienciaServicio.buscarExperiencia(id).subscribe(
      data=>{
        this.expLaboral=data;
      }, err =>{
        alert("No se pudo modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  public EditExp(): void {
    this.experienciaServicio.update(this.expLaboral).subscribe({
      next: (response: ExperienciaLaboral) => {
        console.log(response);
        alert("Se modificó correctamente")
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }

}
