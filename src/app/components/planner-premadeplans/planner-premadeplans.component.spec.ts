import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerPremadeplansComponent } from './planner-premadeplans.component';

describe('PlannerPremadeplansComponent', () => {
  let component: PlannerPremadeplansComponent;
  let fixture: ComponentFixture<PlannerPremadeplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerPremadeplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerPremadeplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
