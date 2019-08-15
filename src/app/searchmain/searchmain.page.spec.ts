import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmainPage } from './searchmain.page';

describe('SearchmainPage', () => {
  let component: SearchmainPage;
  let fixture: ComponentFixture<SearchmainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
