import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcardsComponent } from './foodcards.component';

describe('FoodcardsComponent', () => {
  let component: FoodcardsComponent;
  let fixture: ComponentFixture<FoodcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
