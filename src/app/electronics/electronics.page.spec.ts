import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicsPage } from './electronics.page';

describe('ElectronicsPage', () => {
  let component: ElectronicsPage;
  let fixture: ComponentFixture<ElectronicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
