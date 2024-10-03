import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
 //  constructor(private fb: FormBuilder) {
 //   const housingLocationId = Number(this.route.snapshot.params['id']);
 //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
 //  }

 constructor(private fb: FormBuilder) {
  const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
   this.housingLocation = housingLocation;
  });
 }

 applyForm = this.fb.group({
  firstName: ['', [Validators.required]],
  lastName: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
 });

 submitApplication() {
  this.housingService.submitApplication(
   this.applyForm.value.firstName ?? '',
   this.applyForm.value.lastName ?? '',
   this.applyForm.value.email ?? '',
  );
 }
}
