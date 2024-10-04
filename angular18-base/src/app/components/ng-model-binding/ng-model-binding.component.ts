import { Component } from '@angular/core';

@Component({
 selector: 'app-ng-model-binding',
 templateUrl: './ng-model-binding.component.html',
 styleUrl: './ng-model-binding.component.scss',
})
export class NgModelBindingComponent {
 name: string | undefined;

 resetName() {
  this.name = undefined;
 }
}
