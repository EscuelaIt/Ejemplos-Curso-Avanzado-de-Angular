import { Inject, Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(MyAuthService)
  return authService.verifyAuth();
};


@Injectable({ providedIn: 'root'})
export class MyAuthService {
  verifyAuth(): boolean {
    return false;
  }
}