import { header } from './../../model/header.model';
import { ExperienciaLaboralService } from 'src/app/service/experiencialaboral.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {

  expLaboralList:any;

  constructor(private datosExpLaboral: ExperienciaLaboralService) { }

  ngOnInit() {
    this.datosExpLaboral.getExperiencialaboral().subscribe(data =>{
      this.expLaboralList=data;
    })
  }

}




