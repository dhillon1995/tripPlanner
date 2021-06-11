import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannercardComponent } from './plannercard.component';

describe('PlannercardComponent', () => {
  let component: PlannercardComponent;
  let fixture: ComponentFixture<PlannercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
