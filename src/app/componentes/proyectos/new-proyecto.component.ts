import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  titulo: string='';
  subtitulo: string = '';
  detalle: string ='';
  link: string='';



  constructor(private proyectoService: ProyectoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proye = new proyecto(
      this.titulo,
      this.subtitulo,
      this.detalle,
      this.link)

      this.proyectoService.save(proye).subscribe(
      data => {
        alert("se agregó el nuevo softskill");
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        alert("Algo salió mal :(");
        this.router.navigate(['']);
      }
    )
  }

}
