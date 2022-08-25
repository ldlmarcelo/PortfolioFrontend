import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { experienciaLaboral } from '../model/experienciaLaboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
URL='http://localhost:8080/experienciaLaboral/';
constructor(private http: HttpClient) {}

public getExpeperienciaLaboral(): Observable<experienciaLaboral>{
  return this.http.get<experienciaLaboral>(this.URL+'traer/experienciaLaboral')
}
}






@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  URL = 'http://localhost:8080/experienciaLaboral/';
  constructor(private http: HttpClient) {}

  public getHeader(): Observable<experienciaLaboral> {
    return this.http.get<experienciaLaboral>(this.URL+'traer/perfil');
  }
}
