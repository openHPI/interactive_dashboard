export class Review {
	statement: string;
	imageUrl: string;
	author: string;
}

export class Platform {
	rootUrl: string;
	logoUrl: string;
	reviews: Review[];
	isFilterSelected: boolean;
}

export class Config {
	platforms: Platform[];
	courseSubUrl: string;
}