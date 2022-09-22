import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

pers: persona=null;

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];

    this.personaService.getPersona().subscribe(data => {this.pers=data})

};

public EditPers(): void {
  this.personaService.update(this.pers).subscribe({
    next: (response: persona) => {
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
