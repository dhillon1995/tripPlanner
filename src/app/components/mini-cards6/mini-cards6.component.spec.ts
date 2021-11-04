import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCards6Component } from './mini-cards6.component';

describe('MiniCards6Component', () => {
  let component: MiniCards6Component;
  let fixture: ComponentFixture<MiniCards6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCards6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCards6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
