import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { filter, startWith, switchMap, map } from 'rxjs/operators';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 #route = inject(ActivatedRoute);
 #router = inject(Router);

 // Observable lấy currentPath từ URL
 currentPath$ = this.#router.events.pipe(
  filter((evt) => evt instanceof NavigationEnd),
  startWith(null),
  map((evt: any) => {
   // Nếu là sự kiện đầu tiên, lấy URL từ router
   if (evt === null) {
    return this.#router.url.split('/')[1];
   } else {
    return evt.urlAfterRedirects.split('/')[1];
   }
  }),
 );
 // Observable lấy title từ route
 pageTitle$ = this.#router.events.pipe(
  filter((evt) => evt instanceof NavigationEnd),
  startWith(null),
  switchMap(() => this.leaf.title),
 );

 // Getter để tìm route "lá" (deepest route)
 get leaf(): ActivatedRoute {
  let leaf = this.#route;
  while (leaf.firstChild) {
   leaf = leaf.firstChild;
  }
  return leaf;
 }
}
