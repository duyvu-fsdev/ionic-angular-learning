import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
 selector: 'app-detail',
 templateUrl: './detail.component.html',
 styleUrls: ['./detail.component.scss', '../../common.scss'],
})
export class DetailComponent {
 menu: any;
 constructor(private menuService: MenuService, private route: ActivatedRoute, private title: Title) {
  const id = this.route.snapshot.paramMap.get('id') || '';
  this.menuService.getMenuById(id).subscribe(
   (data) => {
    this.menu = data;
    if (this.menu.name) this.title.setTitle(this.menu.name);
   },
   (e) => console.log(e),
  );
 }
}
