import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

export const menuGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
 const commonService = inject(CommonService);
 if (authService.isLoggedIn) {
  return true;
 } else {
  commonService.sendMessage('Please login to access this feature');
  return false;
 }
};
