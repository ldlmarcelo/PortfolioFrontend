import { PortfolioService } from './../../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
})
export class SoftSkillsComponent implements OnInit {
  softSkillList: any;
  constructor(private Miportfolio: PortfolioService) {}

  ngOnInit(): void {
    this.Miportfolio.obtenerDatos().subscribe(data => {
      this.softSkillList = data.softskill;
    });
  }
}
