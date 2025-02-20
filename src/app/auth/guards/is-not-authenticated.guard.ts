import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedFunctionalGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard');
    return false;
  }

  
  return true;
};
