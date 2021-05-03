import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepagetwoComponent } from './findvenuepagetwo.component';

describe('FindvenuepagetwoComponent', () => {
  let component: FindvenuepagetwoComponent;
  let fixture: ComponentFixture<FindvenuepagetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepagetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
