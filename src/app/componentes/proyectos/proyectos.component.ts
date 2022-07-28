import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;
  constructor(private Miportfolio: PortfolioService) {}

  ngOnInit(): void {
    this.Miportfolio.obtenerDatos().subscribe((data) => {
      this.proyectosList = data.proyectosList;
    });
  }
}
