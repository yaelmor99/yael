import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C9Component } from './c9.component';

describe('C9Component', () => {
  let component: C9Component;
  let fixture: ComponentFixture<C9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
