import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RazorpayPaymentPage } from './razorpay-payment.page';

describe('RazorpayPaymentPage', () => {
  let component: RazorpayPaymentPage;
  let fixture: ComponentFixture<RazorpayPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RazorpayPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
