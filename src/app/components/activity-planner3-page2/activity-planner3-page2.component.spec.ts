import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPlanner3Page2Component } from './activity-planner3-page2.component';

describe('ActivityPlanner3Page2Component', () => {
  let component: ActivityPlanner3Page2Component;
  let fixture: ComponentFixture<ActivityPlanner3Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPlanner3Page2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPlanner3Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
