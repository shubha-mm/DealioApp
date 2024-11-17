import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazorpayPaymentPage } from './razorpay-payment.page';

const routes: Routes = [
  {
    path: '',
    component: RazorpayPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazorpayPaymentPageRoutingModule {}
