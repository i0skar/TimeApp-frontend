/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaportComponent } from './raport.component';

describe('RaportComponent', () => {
  let component: RaportComponent;
  let fixture: ComponentFixture<RaportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
