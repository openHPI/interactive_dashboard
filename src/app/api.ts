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

export class CourseStatistics {
	course_name: string;
	course_code: string;
	course_id: string;
	total_enrollments: number;
	current_enrollments: number;
	course_status: string;
	no_shows: number;
	enrollments_last_day: number;
	enrollments_at_course_start: number;
	enrollments_at_course_middle_netto: number;
	enrollments_at_course_middle: number;
	enrollments_at_course_end: number;
	questions: number;
	questions_last_day: number;
	answers: number;
	answers_last_day: number;
	comments_on_answers: number;
	comments_on_answers_last_day: number;
	comments_on_questions: number;
	comments_on_questions_last_day: number;
	certificates: number;
	helpdesk_tickets: number;
	helpdesk_tickets_last_day: number;
	start_date: string;
	end_date: string;
	new_users: number;
	completion_rate: number;
	consumption_rate: number;
	enrollments_per_day: number;
	hidden: Boolean;
	updated_at: string;
	created_at: string;
	days_since_coursestart: number;
	questions_in_learning_rooms: number;
	questions_last_day_in_learning_rooms: number;
	answers_in_learning_rooms: number;
	answers_last_day_in_learning_rooms: number;
	comments_on_answers_in_learning_rooms: number;
	comments_on_answers_last_day_in_learning_rooms: number;
	comments_on_questions_in_learning_rooms: number;
	comments_on_questions_last_day_in_learning_rooms: number;
	relationships: any;
}