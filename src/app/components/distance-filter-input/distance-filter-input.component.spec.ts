import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceFilterInputComponent } from './distance-filter-input.component';

describe('DistanceFilterInputComponent', () => {
  let component: DistanceFilterInputComponent;
  let fixture: ComponentFixture<DistanceFilterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceFilterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceFilterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
