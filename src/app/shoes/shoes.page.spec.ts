import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoesPage } from './shoes.page';

describe('ShoesPage', () => {
  let component: ShoesPage;
  let fixture: ComponentFixture<ShoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
