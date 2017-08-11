import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLogoComponent } from './filter-logo.component';

describe('FilterLogoComponent', () => {
  let component: FilterLogoComponent;
  let fixture: ComponentFixture<FilterLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
