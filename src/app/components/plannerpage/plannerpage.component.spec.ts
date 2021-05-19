import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerpageComponent } from './plannerpage.component';

describe('PlannerpageComponent', () => {
  let component: PlannerpageComponent;
  let fixture: ComponentFixture<PlannerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
