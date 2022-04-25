import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPlanner3Component } from './activity-planner3.component';

describe('ActivityPlanner3Component', () => {
  let component: ActivityPlanner3Component;
  let fixture: ComponentFixture<ActivityPlanner3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPlanner3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPlanner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
