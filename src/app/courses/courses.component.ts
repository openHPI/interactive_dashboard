import { Component } from '@angular/core';

export class Course {
	imageUrl: string;
	title: string;
	description: string;
	authors: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {

  courses: Course[] = [
	{ imageUrl: 'https://open.hpi.de/files/83063d1d-e891-4438-bfe9-12b63cce1a1e', title: 'Embedded Smart Home', description: 'In der zweiten Auflage des interaktiven Kurses Embedded Smart Home dreht sich alles um die zentrale Verwaltung des Embedded Smart Home. Als Basis des Workshop-Projekts wird auch in diesem Jahr wieder ein Raspberry Pi dienen. Es wird Einblicke geben in die Nutzung von Sensoren, Einführung in die Ansteuerung externer Aktuatoren im Haushalt (z.B. Beleuchtung, Heizung oder Jalousien) und Anzeige und Steuerung des Embedded Smart Home über ein zentrales Display. Zusätzlich werden wir aufgrund vielfacher Wünsche einen Einblick in die externe Steuerung und Überwachung mit einer Kamera geben. Wer noch keine Erfahrung mit Programmierung in Python hat, kann sich vorher noch den Kurs "Spielend Programmieren lernen" ansehen.', authors: 'Martin Malchow, Matthias Bauer' },
	{ imageUrl: 'https://open.hpi.de/files/3b39dcc6-e9f0-43df-b729-4cfab4b9300c', title: 'In-Memory Data Management 2017', description: 'The „In-Memory Data Management" MOOC in 2017 is the fifth iteration of Prof. Hasso Plattner´s successful introduction into the inner mechanics of this recent technology. It is a repetition of the 2015 course and builds on the same, revised material. The course focuses on the management of enterprise data in column-oriented in-memory databases. Latest hardware and software trends led to the development of a new revolutionary database technology that enables flexible and lightning-fast analysis of massive amounts of enterprise data.', authors: 'Prof. Hasso Plattner' }
  ]
}
