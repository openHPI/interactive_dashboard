import { Component, OnInit } from '@angular/core';
import { FeatureCard } from '../../app/dashboard';
import { FEATURE_CARDS } from 'assets/config/config';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.css']
})
export class KeyFeaturesComponent implements OnInit {

  featureCards: FeatureCard[] = FEATURE_CARDS;

  constructor() { }

  ngOnInit() {
  }

}
