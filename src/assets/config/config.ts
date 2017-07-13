import { Config, Platform } from '../../app/dashboard';
import { OPEN_HPI_REVIEWS, OPEN_SAP_REVIEWS, MOOC_HOUSE_REVIEWS, OPEN_WHO_REVIEWS } from 'assets/reviews/reviews';
 
const OPEN_HPI: Platform = {
	rootUrl: 'https://open.hpi.de',
	logoUrl: '../assets/logos/open_hpi_logo.png',
	reviews: OPEN_HPI_REVIEWS,
	isFilterSelected: true
};

const OPEN_SAP: Platform = {
	rootUrl: 'https://open.sap.com',
	logoUrl: '../assets/logos/openSAP_Logo_neg.png',
	reviews: OPEN_SAP_REVIEWS,
	isFilterSelected: false
};

const MOOC_HOUSE: Platform = {
	rootUrl: 'https://mooc.house',
	logoUrl: '../assets/logos/mooc_house_logo_neg_srgb_300.png',
	reviews: MOOC_HOUSE_REVIEWS,
	isFilterSelected: false
};

const OPEN_WHO: Platform = {
	rootUrl: 'https://openwho.org',
	logoUrl: '../assets/logos/who_logo_white.png',
	reviews: OPEN_WHO_REVIEWS,
	isFilterSelected: false
}; 

export const CONFIG: Config = {
	platforms: [OPEN_HPI, OPEN_SAP, MOOC_HOUSE, OPEN_WHO],
	courseSubUrl: '/api/v2/courses',
	geoSubUrl: '/api/v2/stats/geo.json',
	geoStartParam: 'start_date',
	geoEndParam: 'end_date'
};