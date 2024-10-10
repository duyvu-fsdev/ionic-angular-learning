import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../../services/menu.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
 selector: 'app-menu',
 templateUrl: './menu.component.html',
 styleUrls: ['./menu.component.scss', '../../common.scss'],
})
export class MenuComponent {
 menus: any[] = [];

 constructor(private menuService: MenuService, private router: Router, private authService: AuthService) {
  this.menuService.initMenus();
  this.menuService.menus$.subscribe(
   (data) => (this.menus = data as any[]),
   (e) => console.log(e),
  );
 }
 get hasUser(): boolean {
  return this.authService.isLoggedIn;
 }
 ngOnInit() {}
 login() {
  this.authService.handleLogin();
 }
 logout() {
  this.authService.handleLogout();
 }
 gotoDetail(id: any) {
  this.router.navigate([`lazy-loading/detail/${id}`]);
 }
}
