import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginPage } from './afterlogin.page';

describe('AfterloginPage', () => {
  let component: AfterloginPage;
  let fixture: ComponentFixture<AfterloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
