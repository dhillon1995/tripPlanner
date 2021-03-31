import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageComponent } from './findvenuepage.component';

describe('FindvenuepageComponent', () => {
  let component: FindvenuepageComponent;
  let fixture: ComponentFixture<FindvenuepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
