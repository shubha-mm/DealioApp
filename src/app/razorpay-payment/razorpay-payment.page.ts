import { Component, OnInit} from '@angular/core';
declare var Razorpay: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-razorpay-payment',
  templateUrl: './razorpay-payment.page.html',
  styleUrls: ['./razorpay-payment.page.scss'],
})
export class RazorpayPaymentPage implements OnInit{

  paymentAmount: number = 1000; // Example amount in smallest currency unit (e.g., paise for INR)
  currency: string = 'INR'; // Default currency

  constructor(private router: Router) {}

  ngOnInit() {}

  payWithRazorpay() {
    const options = {
      key: 'rzp_live_NnJbR7ipdHTQ7N', // Replace with your Razorpay Key
      amount: this.paymentAmount, // Amount in smallest currency unit (e.g., paise)
      currency: this.currency, // Currency code
      name: 'Your Store Name',
      description: 'Test Payment',
      handler: (response: any) => {
        alert('Payment Successful');
        this.router.navigate(['/success']); // Redirect to success page
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
  }
}
