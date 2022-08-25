import { experienciaLaboral } from './../model/experienciaLaboral';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ExperiencialaboralService{
  URL = 'http://localhost:8080/experiencialaboral/';
  constructor(private http: HttpClient) {}

  public getExperiencialaboral(): Observable<experienciaLaboral> {
    return this.http.get<experienciaLaboral>(this.URL+'traer/experiencialaboral');
  }
}
