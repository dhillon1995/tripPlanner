import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageThingstodoComponent } from './findvenuepage-thingstodo.component';

describe('FindvenuepageThingstodoComponent', () => {
  let component: FindvenuepageThingstodoComponent;
  let fixture: ComponentFixture<FindvenuepageThingstodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageThingstodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageThingstodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
