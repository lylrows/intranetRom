import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Lógica de inicio de sesión
  login(username: string, password: string): boolean {
    // Aquí deberías realizar la autenticación real, por ejemplo, con una llamada a un servidor
    // Por simplicidad, solo simulamos una autenticación exitosa aquí
    if (username === 'usuario' && password === 'contrasena') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  // Lógica de cierre de sesión
  logout(): void {
    // Realiza cualquier limpieza necesaria al cerrar sesión
    this.isAuthenticated = false;

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
