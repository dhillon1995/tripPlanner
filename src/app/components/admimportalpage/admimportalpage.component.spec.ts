import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimportalpageComponent } from './admimportalpage.component';

describe('AdmimportalpageComponent', () => {
  let component: AdmimportalpageComponent;
  let fixture: ComponentFixture<AdmimportalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimportalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmimportalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
