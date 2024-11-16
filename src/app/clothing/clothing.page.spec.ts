import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClothingPage } from './clothing.page';

describe('ClothingPage', () => {
  let component: ClothingPage;
  let fixture: ComponentFixture<ClothingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
