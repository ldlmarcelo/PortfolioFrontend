import { softskill } from 'src/app/model/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-softskill',
  templateUrl: './new-softskill.component.html',
  styleUrls: ['./new-softskill.component.css']
})
export class NewSoftskillComponent implements OnInit {

  habilidad: string='';
  porcentaje: number = 0;
  tooltip: string ='';



  constructor(private softskillService: SoftskillService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const softs = new softskill(
      this.habilidad,
      this.porcentaje,
      this.tooltip)

      this.softskillService.save(softs).subscribe(
      data => {
        alert("se agregó el nuevo softskill");
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        alert("Algo salió mal :(");
        this.router.navigate(['']);
      }
    )
  }

}
