import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Array<object> = [{id: 1, src: "../assets/testimonials/testimonial-dominik.jpg"},
                                 {id: 2, src: "../assets/testimonials/testimonial-elisabeth.jpg"},
                                 {id: 3, src: "../assets/testimonials/testimonial-oriol.jpg"}];
  currentTestimonial: number = 1;

  public next() : void {
    if(this.testimonials.length < this.currentTestimonial+1) {
      this.currentTestimonial = 1;
    }
    else {
      this.currentTestimonial++;
    }
  }

  public previous() : void {
    if(this.currentTestimonial <= 1) {
      this.currentTestimonial = this.testimonials.length;
    }
    else {
      this.currentTestimonial--;
    }
  }
}
