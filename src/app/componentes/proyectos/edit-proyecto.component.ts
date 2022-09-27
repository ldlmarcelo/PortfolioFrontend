import { proyecto } from './../../model/proyecto';
import { ProyectoService } from './../../service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
proye: proyecto=null;
public modificarProyecto: proyecto | undefined;


  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.proyectoService.buscarProyecto(id).subscribe(
      data=>{
        this.proye=data;
      }, err =>{
        alert("No se pudo modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  public Editproye(): void {
    this.proyectoService.update(this.proye).subscribe({
      next: (response: proyecto) => {
        console.log(response);
        alert("Se modificó correctamente")
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
        this.router.navigate(['']);
      },
    });
  }

}


