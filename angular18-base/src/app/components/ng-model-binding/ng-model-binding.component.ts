import { Component } from '@angular/core';

@Component({
 selector: 'app-ng-model-binding',
 templateUrl: './ng-model-binding.component.html',
 styleUrls: ['./ng-model-binding.component.scss', '../common.scss'],
})
export class NgModelBindingComponent {
 name: string | undefined;

 resetName() {
  this.name = undefined;
 }
}
