import { hardskill } from './../../model/hardskill';
import { HardskillService } from './../../service/hardskill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-hardskill',
  templateUrl: './edit-hardskill.component.html',
  styleUrls: ['./edit-hardskill.component.css']
})
export class EditHardskillComponent implements OnInit {
hards: hardskill=null;
public modificarSoftskill: hardskill | undefined;


  constructor(private hardskillService: HardskillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.hardskillService.buscarHardskill(id).subscribe(
      data=>{
        this.hards=data;
      }, err =>{
        alert("No se pudo modificar el hardskill");
        this.router.navigate(['']);
      }
    )
  }

  public Edithards(): void {
    this.hardskillService.update(this.hards).subscribe({
      next: (response: hardskill) => {
        console.log(response);
        alert("Se modificó correctamente")
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
        this.router.navigate(['']);
      },
    });
  }

}



