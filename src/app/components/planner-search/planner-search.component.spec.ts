import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerSearchComponent } from './planner-search.component';

describe('PlannerSearchComponent', () => {
  let component: PlannerSearchComponent;
  let fixture: ComponentFixture<PlannerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
