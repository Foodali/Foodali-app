import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodposterPage } from './foodposter.page';

describe('FoodposterPage', () => {
  let component: FoodposterPage;
  let fixture: ComponentFixture<FoodposterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodposterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodposterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
