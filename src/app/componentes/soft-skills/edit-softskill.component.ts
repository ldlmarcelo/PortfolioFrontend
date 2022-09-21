import { SoftskillService } from './../../service/softskill.service';
import { softskill } from './../../model/softskill';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-softskill',
  templateUrl: './edit-softskill.component.html',
  styleUrls: ['./edit-softskill.component.css']
})
export class EditSoftskillComponent implements OnInit {
softs: softskill=null;
public modificarSoftskill: softskill | undefined;


  constructor(private softskillServicio: SoftskillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.softskillServicio.buscarSoftskill(id).subscribe(
      data=>{
        this.softs=data;
      }, err =>{
        alert("No se pudo modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  public Editsofts(): void {
    this.softskillServicio.update(this.softs).subscribe({
      next: (response: softskill) => {
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


