import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencialaboral.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { header } from 'src/app/model/header.model';


@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {
  isLogged=false
  expLaboralList:ExperienciaLaboral[]=[];
  header: header = new header("","");

  public modificarExperiencia:ExperienciaLaboral|undefined;
  public eliminarExperiencia:ExperienciaLaboral|undefined;

  constructor(private experienciaService: ExperienciaLaboralService, private router:Router,
    private tokenService: TokenService) { }

  ngOnInit():void {
    this.mostrarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  public mostrarExperiencia():void{
    this.experienciaService.getExperiencialaboral().subscribe(data=>{this.expLaboralList=data;})
  }

  public onEliminarExperiencia(id:number):void{
    this.experienciaService.delete(id).subscribe({
      next:(response:void)=>{
        console.log("bien");
        alert("Se elimino correctamente la experiencia");
        this.mostrarExperiencia();

      },
      error:(error:HttpErrorResponse)=>{
        console.log(error);
      alert('No se pudo eliminar la experiencia');
      this.mostrarExperiencia();
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






