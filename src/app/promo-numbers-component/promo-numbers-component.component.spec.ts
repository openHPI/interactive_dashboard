import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoNumbersComponentComponent } from './promo-numbers-component.component';

describe('PromoNumbersComponentComponent', () => {
  let component: PromoNumbersComponentComponent;
  let fixture: ComponentFixture<PromoNumbersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoNumbersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoNumbersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
