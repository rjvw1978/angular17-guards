import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService)
   const router=inject(Router)

   if (!authService.isAuthenticated)
    {
      router.navigateByUrl("/iniciar-sesion")
    }
    
  return authService.isAuthenticated;
   
};
