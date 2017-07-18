export class PromoNumber {
	count: number;
	countOld: number;
	title: string;
	description: string;
}

export class Review {
	statement: string;
	imageUrl: string;
	author: string;
}

export class Platform {
	rootUrl: string;
	logoUrl: string;
	mapMarkerUrl: string;
	reviews: Review[];
	isFilterSelected: boolean;
}

export class Config {
	platforms: Platform[];
	courseSubUrl: string;
	geoSubUrl: string;
	geoStartParam: string;
	geoEndParam: string;
	globalsSubUrl: string;
}

export class FeatureCard {
    imageUrl: string;
    title: string;
    text: string;
}