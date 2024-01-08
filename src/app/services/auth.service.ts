import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router){

  }

  // Lógica de inicio de sesión
  login(username: string, password: string): void {
    sessionStorage.setItem('Guard', 'fasfasf');
    console.log(sessionStorage.getItem('Guard'));
    this.router.navigate(['dashboard']); 
    // Aquí deberías realizar la autenticación real, por ejemplo, con una llamada a un servidor
    // Por simplicidad, solo simulamos una autenticación exitosa aquí
    // if (username === 'usuario' && password === 'contrasena') {
    //   //this.isAuthenticated = true;
    //   return true;
    // }
    // return false;
  }

  // Lógica de cierre de sesión
  logout(): void {
    sessionStorage.removeItem('Guard');
    // Realiza cualquier limpieza necesaria al cerrar sesión
    //this.isAuthenticated = false;

  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    let guard = sessionStorage.getItem('Guard');
    if (guard == 'NULO') {
      return false 
    } else {
      return true 
    }

    //return sessionStorage.getItem('Guard') !== null ? true : false;
    //this.isAuthenticated=false;
    //return this.isAuthenticated;
  }
}
