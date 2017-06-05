import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoNumbersComponent } from './promo-numbers.component';

describe('PromoNumbersComponent', () => {
  let component: PromoNumbersComponent;
  let fixture: ComponentFixture<PromoNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
