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
    displayName: string;
    logoUrl: string;
    mapMarkerUrl: string;
    reviews: Review[];
    isFilterSelected: boolean;
    citation: string;
    primaryColor: string;
}

export class Config {
    platforms: Platform[];
    courseSubUrl: string;
    directCourseUrl: string;
    geoSubUrl: string;
    geoStartParam: string;
    geoEndParam: string;
    globalsSubUrl: string;
    activeUserSubUrl: string;
    activeStartParam: string;
    activeEndParam: string;
    citationAll: string;
}

export class FeatureCard {
    imageUrl: string;
    title: string;
    text: string;
}