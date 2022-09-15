import { EducacionService } from './../../service/educacion.service';
import { Educacion } from './../../model/educacion';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  isLogged=false
  eduList:Educacion[]=[];


  public modificarEducacion:Educacion|undefined;
  public eliminarEducacion:Educacion|undefined;

  constructor(private educacionService: EducacionService, private router:Router,
    private tokenService: TokenService) { }

  ngOnInit():void {
    this.mostrarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  public mostrarEducacion():void{
    this.educacionService.getEducacion().subscribe(data=>{this.eduList=data;})
  }

  public onEliminarEducacion(idExp:number):void{
    this.educacionService.delete(idExp).subscribe({
      next:(response:void)=>{
        alert("Se elimino correctamente la educacion");
        this.mostrarEducacion();

      },
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo eliminar la educacion');
      this.mostrarEducacion();
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


