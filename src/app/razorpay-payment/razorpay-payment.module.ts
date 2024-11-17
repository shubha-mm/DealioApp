import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazorpayPaymentPageRoutingModule } from './razorpay-payment-routing.module';

import { RazorpayPaymentPage } from './razorpay-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazorpayPaymentPageRoutingModule
  ],
  declarations: [RazorpayPaymentPage]
})
export class RazorpayPaymentPageModule {}
