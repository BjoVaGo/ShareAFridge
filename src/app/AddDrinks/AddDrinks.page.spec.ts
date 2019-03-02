import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrinksPage } from './AddDrinks.page';

describe('AddDrinksPage', () => {
  let component: AddDrinksPage;
  let fixture: ComponentFixture<AddDrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDrinksPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
