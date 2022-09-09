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

  public modificarExperiencia(experiencia: ExperienciaLaboral):Observable<ExperienciaLaboral>{
    return this.http.put<ExperienciaLaboral>(`${this.URL}+/ExperienciaLaboral/modificar`,experiencia);
  }
  public crearExperiencia(experiencia: ExperienciaLaboral):Observable<ExperienciaLaboral>{
    return this.http.post<ExperienciaLaboral>(`${this.URL}+/ExperienciaLaboral/crear`,experiencia);
  }
  public eliminarExperiencia(experienciaId: number):Observable<void>{
    return this.http.delete<void>(`${this.URL}+/ExperienciaLaboral/eliminar/${experienciaId}`);
  }
  public buscarExperiencia(idExp: number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(`${this.URL}+/ExperienciaLaboral/${idExp}`);
  }
}
