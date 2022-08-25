import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaLaboralList: any;
  constructor(private MiPortfolioData: PortfolioService) { }

  ngOnInit(): void {
    this.MiPortfolioData.obtenerDatos().subscribe(data =>{
      this.experienciaLaboralList=data.experienciaLaboral;
    })
  }

}
