import { TokenService } from './../../service/token.service';
import { hardskill } from './../../model/hardskill';
import { HardskillService } from './../../service/hardskill.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css'],
})
export class HardSkillsComponent implements OnInit {
  isLogged=false
  hardskillList:hardskill[]=[];

  constructor(private hardskillService: HardskillService,private router: Router, private tokenService:TokenService) {}

  ngOnInit(): void {
    this.mostrarHardskill();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}
public mostrarHardskill():void{
  this.hardskillService.getHardskill().subscribe(data=>{this.hardskillList=data;})
}

public onEliminarHardskill(id:number):void{
  this.hardskillService.delete(id).subscribe({
    next:(response:void)=>{
      alert("Se elimino correctamente el valor");
      this.mostrarHardskill();

    },
    error:(error:HttpErrorResponse)=>{
    alert('No se pudo eliminar el valor');
    this.mostrarHardskill();
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

