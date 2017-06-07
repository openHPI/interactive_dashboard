import { Component } from '@angular/core';

export class PromoNumber {
	count: number;
	title: string;
	description: string;
}

@Component({
  selector: 'app-promo-numbers',
  templateUrl: './promo-numbers.component.html',
  styleUrls: ['./promo-numbers.component.css']
})

export class PromoNumbersComponent {

  promoNumbers: PromoNumber[] = [
	{ count: 25.524, title: 'Teilnehmer', description: 'sdfsdfsdfsdf aktuell OpenHPI' },
	{ count: 368, title: 'Kurse', description: 'biete OpenHPI aktuell an' },
	{ count: 213, title: 'Lehrer', description: 'aldjflkasdjf' },
	{ count: 34.322, title: 'Zertifikate', description: 'bereits vergeben' }
  ]

}
