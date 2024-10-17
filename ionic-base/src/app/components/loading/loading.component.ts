import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/NgRx/store/AppState';
import { LoadingState } from 'src/app/NgRx/store/loading/loading.slice';

@Component({
 selector: 'app-loading',
 templateUrl: './loading.component.html',
 styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
 loading!: Observable<LoadingState>;
 constructor(private store: Store<AppState>) {}
 ngOnInit() {
  this.loading = this.store.select('loading');
 }
}
