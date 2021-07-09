import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageHealthComponent } from './findvenuepage-health.component';

describe('FindvenuepageHealthComponent', () => {
  let component: FindvenuepageHealthComponent;
  let fixture: ComponentFixture<FindvenuepageHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
