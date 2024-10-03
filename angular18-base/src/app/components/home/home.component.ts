import { Component } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrl: './home.component.scss',
})
export class HomeComponent {
 readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

 housingLocation: HousingLocation = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${this.baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
 };
}
