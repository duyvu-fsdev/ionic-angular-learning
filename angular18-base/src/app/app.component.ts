import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { CommonService } from './services/common.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 currentPath: string = '';
 pageTitle: string = '';
 message: string | null = null;
 constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonService) {
  this.commonService.message$.subscribe((data) => (this.message = data));
 }
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
