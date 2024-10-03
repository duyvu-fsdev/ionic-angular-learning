import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
 selector: 'app-details',
 templateUrl: './details.component.html',
 styleUrl: './details.component.scss',
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;
 housingLocationId = -1;
 constructor() {
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
 }
}
