import { HardskillService } from './../../service/hardskill.service';
import { hardskill } from 'src/app/model/hardskill';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hardskill',
  templateUrl: './new-hardskill.component.html',
  styleUrls: ['./new-hardskill.component.css'],
})
export class NewHardskillComponent implements OnInit {
  icon: string = '';
  porcentaje: number = 0;

  constructor(
    private hardskillService: HardskillService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const hards = new hardskill(this.icon, this.porcentaje);

    this.hardskillService.save(hards).subscribe(
      (data) => {
        alert('se agregó el nuevo hardskill');
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
        alert('Algo salió mal :(');
        this.router.navigate(['']);
      }
    );
  }
}
