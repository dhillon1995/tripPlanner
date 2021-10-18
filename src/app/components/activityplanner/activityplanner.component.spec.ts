import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityplannerComponent } from './activityplanner.component';

describe('ActivityplannerComponent', () => {
  let component: ActivityplannerComponent;
  let fixture: ComponentFixture<ActivityplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityplannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
