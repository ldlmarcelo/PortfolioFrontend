import { TokenService } from './../../service/token.service';
import { softskill } from './../../model/softskill';
import { SoftskillService } from './../../service/softskill.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
})
export class SoftSkillsComponent implements OnInit {
  isLogged=false
  softskillList:softskill[]=[];

  constructor(private softskillService: SoftskillService,private router: Router, private tokenService:TokenService) {}

  ngOnInit(): void {
    this.mostrarSoftskill();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}
public mostrarSoftskill():void{
  this.softskillService.getSoftskill().subscribe(data=>{this.softskillList=data;})
}

public onEliminarSoftskill(id:number):void{
  this.softskillService.delete(id).subscribe({
    next:(response:void)=>{
      alert("Se elimino correctamente el valor");
      this.mostrarSoftskill();

    },
    error:(error:HttpErrorResponse)=>{
    alert('No se pudo eliminar el valor');
    this.mostrarSoftskill();
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
