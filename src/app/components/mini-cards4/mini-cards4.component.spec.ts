import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards4Component } from './mini-cards4.component';

describe('MiniCards4Component', () => {
  let component: MiniCards4Component;
  let fixture: ComponentFixture<MiniCards4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
