import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencialaboral.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {
  isLogged=false
  expLaboralList:ExperienciaLaboral[]=[];
  public modificarEducacion:ExperienciaLaboral|undefined;
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

  public onEliminarExperiencia(idExp:number):void{
    this.experienciaService.delete(idExp).subscribe({
      next:(response:void)=>{
        alert("Se elimino correctamente la experiencia");
        this.router.navigate(['']);

      },
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo eliminar la experiencia');
      this.router.navigate(['']);
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






