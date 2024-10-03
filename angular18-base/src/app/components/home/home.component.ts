import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation';
import { HousingService } from '../../services/housing.service';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrl: './home.component.scss',
})
export class HomeComponent {
 housingLocationList: HousingLocation[] = [];
 housingService: HousingService = inject(HousingService);
 constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
 }
}
