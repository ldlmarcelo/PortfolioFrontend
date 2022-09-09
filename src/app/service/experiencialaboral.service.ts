import { ExperienciaLaboral } from './../model/experienciaLaboral';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ExperienciaLaboralService{
  URL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getExperiencialaboral(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(`${this.URL}+/ExperienciaLaboral/traer`);
  }
}
