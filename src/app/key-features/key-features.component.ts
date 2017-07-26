import { Component } from '@angular/core';
import { FeatureCard } from '../../app/dashboard';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.css']
})
export class KeyFeaturesComponent {

  featureCards: FeatureCard[];

  constructor(private dataService: DataService) {
	this.featureCards = dataService.getFeatureCards();
  }

}
