import { CanActivateFn } from '@angular/router';

export const incentiveGuard: CanActivateFn = (route, state) => {
  return true;
};
