import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportPage } from './sport.page';

describe('SportPage', () => {
  let component: SportPage;
  let fixture: ComponentFixture<SportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
