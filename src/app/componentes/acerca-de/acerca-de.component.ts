import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","","","","","");
  isLogged=false

  public modificarPersona:persona|undefined;

  constructor(public personaService: PersonaService, private router:Router,
    private tokenService: TokenService) {}

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    this.personaService.getPersona().subscribe((data) => {

      this.persona = data;

    });
  }




}
