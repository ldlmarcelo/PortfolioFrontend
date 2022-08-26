import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'http://localhost:8080'; //La Url que corresponda en cada caso
  token: any;

  constructor(private http: HttpClient, private rotuer: Router) {}

  login(email: string, password: string) {
    this.http
      .post(this.uri + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        //Redireccionamos al usuario a su perfil
        this.rotuer.navigate(['profile']);
        //Guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      });
  }

  // Para cerrar sesión eliminamos el token del localStorage
  logout() {
    localStorage.removeItem('token');
  }

  //Un servicio para verificar si existe la sesión

  public get logIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
