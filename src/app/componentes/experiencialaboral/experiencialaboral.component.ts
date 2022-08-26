import { ExperiencialaboralService } from 'src/app/service/experiencialaboral.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {

  expLaboralList:any;

  constructor(private datosExpLaboral: ExperiencialaboralService) { }

  ngOnInit() {
    this.datosExpLaboral.getExperiencialaboral().subscribe(data =>{
      this.expLaboralList=data;
    })
  }

}




