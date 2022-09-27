import { proyecto } from 'src/app/model/proyecto';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  proyectosList: any;
  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe((data) => {
      this.proyectosList = data;
    });
  }
}

