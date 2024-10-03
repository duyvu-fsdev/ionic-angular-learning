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
 filteredLocationList: HousingLocation[] = [];

 constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
  this.filteredLocationList = this.housingLocationList;
 }

 filterResults(text: string) {
  if (!text) {
   this.filteredLocationList = this.housingLocationList;
   return;
  }

  this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
   housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
  );
 }
}
