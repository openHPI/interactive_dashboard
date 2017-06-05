import { Component, OnInit } from '@angular/core';

export class FeatureCard {
	imageUrl: string;
	title: string;
	text: string;
}

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.css']
})
export class KeyFeaturesComponent implements OnInit {

  featureCards: FeatureCard[] = [
	{ imageUrl: '../assets/many-people.svg', title: 'Massive', text: 'Learn with thousands of interested people.' },
	{ imageUrl: '../assets/open-door.svg', title: 'Open', text: 'Everyone can participate. Sign-Up is free.' },
	{ imageUrl: '../assets/online.svg', title: 'Online', text: 'Learn anywhere, at any time. Set your own plans.' },
	{ imageUrl: '../assets/online-course.svg', title: 'Courses', text: 'A huge variety of topics. New courses coming all the time.' }
  ]



  constructor() { }

  ngOnInit() {
  }

}
