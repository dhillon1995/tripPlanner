import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageCinemaComponent } from './findvenuepage-cinema.component';

describe('FindvenuepageCinemaComponent', () => {
  let component: FindvenuepageCinemaComponent;
  let fixture: ComponentFixture<FindvenuepageCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
