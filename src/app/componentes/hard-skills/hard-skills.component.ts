import { Component, OnInit } from '@angular/core';
import {PortfolioService} from './../../servicios/portfolio.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardskillList: any;
  constructor(private Miportfolio: PortfolioService) { }

  ngOnInit(): void {
this.Miportfolio.obtenerDatos().subscribe(data =>{
  this.hardskillList= data.hardskill;
})
  }

}

//  ngOnInit(): void {
//     this.MiPortfolioData.obtenerDatos().subscribe(data =>{
//       this.experienciaLaboralList=data.experienciaLaboral;
//     })
//   }
