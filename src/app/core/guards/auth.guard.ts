import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Asegúrate de importar y ajustar el servicio de autenticación según tu estructura
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn(); // Reemplaza con tu lógica de autenticación
  console.log(isLoggedIn)
  if (isLoggedIn) {
    return true;
  } else {
    // Redirige al componente de login si el usuario no está autenticado
    window.location.href = '';  // Puedes ajustar la redirección según tus necesidades
    return false;
  }
};