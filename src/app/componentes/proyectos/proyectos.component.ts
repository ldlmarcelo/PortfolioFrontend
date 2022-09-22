import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from './../../service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  isLogged=false
 proyectoList:proyecto[]=[];

  constructor(private proyectoService: ProyectoService,private router: Router, private tokenService:TokenService) {}

  ngOnInit(): void {
    this.mostrarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}
public mostrarProyecto():void{
  this.proyectoService.getProyecto().subscribe(data=>{this.proyectoList=data;})
}

public onEliminarProyecto(id:number):void{
  this.proyectoService.delete(id).subscribe({
    next:(response:void)=>{
      alert("Se elimino correctamente el valor");
      this.mostrarProyecto();

    },
    error:(error:HttpErrorResponse)=>{
    alert('No se pudo eliminar el valor');
    this.mostrarProyecto();
    }
  })
}

  login(){
    this.router.navigate(['/login'])
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
