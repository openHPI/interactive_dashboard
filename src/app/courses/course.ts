export class CertificateRate {
	available: boolean;
	threshold?: number;
}

export class Certificate {
	confirmation_of_participation: CertificateRate;
	record_of_achievement: CertificateRate;
	qualified_certificate: CertificateRate;
}

export class Link {
	self: string;
}

export class Attributes {
	title: string;
	slug: string;
	start_at: string;
	end_at: string;
	abstract: string;
	image_url: string;
	language: string;
	status: string;
	classifiers: any;
	teachers: string;
	accessible: boolean;
	enrollable: boolean;
	hidden: boolean;
	external: boolean;
	external_url: string;
	policy_url: string;
	certificates: Certificate;
	on_demand: boolean;
}

export class Course {
	type: string;
	id: string;
	links: Link;
	attributes: Attributes;
	relationships: any;
}