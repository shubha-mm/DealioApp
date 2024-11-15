import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeautyPage } from './beauty.page';

describe('BeautyPage', () => {
  let component: BeautyPage;
  let fixture: ComponentFixture<BeautyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
