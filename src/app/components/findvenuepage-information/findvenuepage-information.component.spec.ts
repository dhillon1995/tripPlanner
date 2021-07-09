import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvenuepageInformationComponent } from './findvenuepage-information.component';

describe('FindvenuepageInformationComponent', () => {
  let component: FindvenuepageInformationComponent;
  let fixture: ComponentFixture<FindvenuepageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindvenuepageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvenuepageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
