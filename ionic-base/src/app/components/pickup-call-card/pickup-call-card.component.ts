import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-pickup-call-card',
 templateUrl: './pickup-call-card.component.html',
 styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
 @Input() status!: string;
 @Input() createdAt!: string;
 @Input() updatedAt!: string;
 @Input() notes!: string;
 @Input() vallue!: string;

 constructor() {}

 ngOnInit() {}
}
