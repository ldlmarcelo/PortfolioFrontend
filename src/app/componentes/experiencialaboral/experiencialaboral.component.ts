import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';
import { Component, OnInit } from '@angular/core';
import { experienciaLaboral } from './../../model/experienciaLaboral';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {
  experienciaLaboralList: any;
  experiencialaboral: experienciaLaboral = new experienciaLaboral("","","","","");

  constructor(public experiencialaboralservice: ExperiencialaboralService) { }

  ngOnInit() {
  }

}
