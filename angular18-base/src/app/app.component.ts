import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 currentPath: string = '';
 pageTitle: string = '';
 constructor(private route: ActivatedRoute, private router: Router) {}
 ngOnInit() {
  this.router.events
   .pipe(
    filter((evt) => evt instanceof NavigationEnd),
    switchMap(() => this.leaf.title),
   )
   .subscribe((title) => {
    this.pageTitle = title || '';
   });
  this.router.events
   .pipe(
    filter((evt) => evt instanceof NavigationEnd),
    map((evt: any) => evt.urlAfterRedirects.split('/')[1]),
   )
   .subscribe((currentPath) => {
    this.currentPath = currentPath || '';
   });
 }
 get leaf(): ActivatedRoute {
  let leaf = this.route;
  while (leaf.firstChild) {
   leaf = leaf.firstChild;
  }
  return leaf;
 }
}
