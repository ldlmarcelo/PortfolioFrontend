import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  proyectosList: any;
  constructor(private Miportfolio: PortfolioService) {}

  ngOnInit(): void {
    this.Miportfolio.obtenerDatos().subscribe((data) => {
      this.proyectosList = data.proyectosList;
    });
  }
}

